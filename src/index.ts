import { McpAgent } from "agents/mcp";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { FRAMEWORKS, FRAMEWORK_MAP, FRAMEWORK_TABLE } from "./skills";

type Env = {
  MCP_OBJECT: DurableObjectNamespace<PsychologicalProfilingToolkit>;
};

export class PsychologicalProfilingToolkit extends McpAgent<Env> {
  server = new McpServer({
    name: "psychological-profiling-toolkit",
    version: "1.0.0",
  });

  async init() {
    // ── Tool 1: list_frameworks ──────────────────────────────────
    // Returns all available frameworks with descriptions.
    this.server.tool(
      "list_frameworks",
      "List all 16 psychological profiling frameworks with their descriptions and trigger profile_signals. Use this first to understand what's available before querying a specific framework.",
      {},
      async () => {
        const frameworks = FRAMEWORK_TABLE.map((entry) => {
          const skill = FRAMEWORK_MAP.get(entry.frameworkId);
          return {
            id: entry.frameworkId,
            framework: entry.framework,
            profile_signal: entry.profile_signal,
            description: skill?.description ?? "",
          };
        });

        return {
          content: [
            {
              type: "text" as const,
              text: JSON.stringify(
                {
                  total: frameworks.length,
                  frameworks,
                  usage_hint:
                    "Use 'assess' with a problem description to get the best framework, or 'get_framework' with an id to load the full methodology.",
                },
                null,
                2
              ),
            },
          ],
        };
      }
    );

    // ── Tool 2: assess ─────────────────────────────────────────
    // Takes a profile state description, assesses the profile gap,
    // and returns the recommended framework with its full content.
    this.server.tool(
      "assess",
      "Describe the current profile state and available evidence and this tool will assess the type of profile gap, recommend the best profiling framework, and return the full methodology so you can work through it. Include as much context as possible: which sections are populated, what evidence types are available, and what the current tier status is.",
      {
        problem: z
          .string()
          .describe(
            "Description of the current profile state, available evidence, and what profile sections need advancing. Include section tiers, evidence types, and any cross-section contradictions observed."
          ),
        what_tried: z
          .string()
          .optional()
          .describe("What frameworks or approaches have already been applied"),
        success_looks_like: z
          .string()
          .optional()
          .describe("What a good profile outcome would look like"),
      },
      async ({ problem, what_tried, success_looks_like }) => {
        // Load the profiling toolkit router content
        const router = FRAMEWORK_MAP.get("psychological-profiling-toolkit");

        // Build diagnostic context
        const context = [
          `PROBLEM: ${problem}`,
          what_tried ? `WHAT'S BEEN TRIED: ${what_tried}` : null,
          success_looks_like
            ? `SUCCESS LOOKS LIKE: ${success_looks_like}`
            : null,
        ]
          .filter(Boolean)
          .join("\n\n");

        // Keyword-based matching for primary recommendation
        const scores = FRAMEWORK_TABLE.map((entry) => {
          let score = 0;
          const lower = (problem + " " + (what_tried ?? "") + " " + (success_looks_like ?? "")).toLowerCase();

          // Pattern matching based on the profile dispatch table
          const patterns: Record<string, string[]> = {
            "big-five": [
              "personality", "trait", "openness", "conscientiousness",
              "extraversion", "agreeableness", "neuroticism", "ocean",
              "five factor", "big five", "temperament", "disposition",
            ],
            "attachment-architecture": [
              "attachment", "relational", "trust", "dependence",
              "proximity", "avoidant", "anxious", "secure base",
              "abandonment", "intimacy", "bonding",
            ],
            "locus-of-control": [
              "attribution", "locus", "internal", "external",
              "chance", "luck", "powerful others", "agency",
              "blame", "credit", "responsibility", "control",
            ],
            "emotion-regulation": [
              "emotion", "regulation", "distress", "impulse",
              "emotional vocabulary", "dysregulation", "overwhelm",
              "coping", "affect", "mood", "feelings",
            ],
            "defence-mechanisms": [
              "defence", "defense", "projection", "denial",
              "splitting", "intellectualis", "rationalis",
              "displacement", "sublimation", "humour deflect",
            ],
            "cognitive-distortions": [
              "distortion", "catastrophi", "all-or-nothing",
              "mind-reading", "should statement", "black and white",
              "overgenerali", "magnif", "minimis", "absolute language",
            ],
            "cognitive-triad": [
              "self-view", "worldview", "future orientation",
              "hopeless", "worthless", "self-description",
              "cognitive triad", "beck", "negative self",
            ],
            "existential-orientation": [
              "meaning", "purpose", "mortality", "death",
              "isolation", "freedom", "existential", "absurd",
              "nihilis", "legacy", "spirituality",
            ],
            "contradiction-map": [
              "contradiction", "inconsisten", "oscillat",
              "both", "conflicting", "paradox", "split",
              "cross-section", "prediction violation",
            ],
            "predictive-risk-map": [
              "risk", "trigger", "vulnerability", "predict",
              "warning sign", "decompensation", "relapse",
              "recovery", "resilience", "protective factor",
            ],
            "cognitive-processing": [
              "system 1", "system 2", "reflective", "intuitive",
              "metacognit", "dual process", "cognitive reflection",
              "problem-solving", "self-correction", "heuristic",
            ],
            "behavioural-defaults": [
              "default", "uncertainty", "novel situation",
              "species-typical", "prospect theory", "loss aversion",
              "risk-seeking", "status quo", "habitual",
            ],
            "pigeon-superstition-superposition": [
              "superstiti", "causal claim", "ritual", "extinction",
              "contingency", "spurious", "illusory correlation",
              "signal detection", "pigeon", "coincidence",
            ],
            "interpersonal-strategy": [
              "cooperation", "defection", "punishment", "forgiveness",
              "reciproc", "tit-for-tat", "game theory", "conflict",
              "retaliat", "trust game", "prisoner",
            ],
            "signal-discrimination": [
              "epistemic", "belief updat", "anomaly",
              "source evaluation", "shortcut learning", "calibration",
              "fox", "hedgehog", "signal", "noise", "discriminat",
            ],
            "approach-avoidance": [
              "approach", "avoidance", "bis", "bas",
              "inhibition", "activation", "risk language",
              "topic avoidance", "engagement", "withdrawal",
            ],
          };

          const keywords = patterns[entry.frameworkId] ?? [];
          for (const kw of keywords) {
            if (lower.includes(kw)) score += 1;
          }

          return { ...entry, score };
        });

        // Sort by score descending
        scores.sort((a, b) => b.score - a.score);

        const primary = scores[0];
        const secondary = scores[1];
        const primarySkill = FRAMEWORK_MAP.get(primary.frameworkId);
        const secondarySkill = FRAMEWORK_MAP.get(secondary.frameworkId);

        // If no keywords matched, include the router for manual diagnosis
        if (primary.score === 0) {
          return {
            content: [
              {
                type: "text" as const,
                text: [
                  "## Assessment: Unclear profile gap",
                  "",
                  "The description didn't match a clear profiling framework. Here's the full profiling toolkit so you can work through the dispatch table manually.",
                  "",
                  "### Diagnostic Questions to Ask:",
                  "1. Which profile sections are currently empty or at Tier 0?",
                  "2. What evidence types are available (court records, interviews, cultural output)?",
                  "3. Are any populated sections producing cross-section prediction violations?",
                  "4. Are there unanalysed causal claims in the evidence?",
                  "5. Have S1–S8 reached Tier 2+ with S10 still empty?",
                  "6. What is the current evidence tier ceiling?",
                  "",
                  "---",
                  "",
                  router?.content ?? "",
                ].join("\n"),
              },
            ],
          };
        }

        return {
          content: [
            {
              type: "text" as const,
              text: [
                `## Assessment: ${primary.framework}`,
                `**Trigger profile_signal:** "${primary.profile_signal}"`,
                `**Match confidence:** ${primary.score} keyword${primary.score !== 1 ? "s" : ""} matched`,
                "",
                `**Your context:**`,
                context,
                "",
                secondary.score > 0
                  ? `**Secondary recommendation:** ${secondary.framework} (${secondary.score} match${secondary.score !== 1 ? "es" : ""}) — use if primary framework doesn't fully advance the section. Load with: get_framework("${secondary.frameworkId}")`
                  : "",
                "",
                "---",
                "",
                "## Full Methodology",
                "",
                primarySkill?.content ?? "",
              ].join("\n"),
            },
          ],
        };
      }
    );

    // ── Tool 3: get_framework ────────────────────────────────────
    // Returns the full skill content for a specific framework.
    this.server.tool(
      "get_framework",
      "Load the full methodology for a specific profiling framework by its ID. Use list_frameworks first to see available IDs, or get an ID from a assess result.",
      {
        framework_id: z
          .string()
          .describe(
            'The framework ID, e.g. "big-five", "attachment-architecture", "locus-of-control", "contradiction-map"'
          ),
      },
      async ({ framework_id }) => {
        const skill = FRAMEWORK_MAP.get(framework_id);

        if (!skill) {
          const available = FRAMEWORKS.map((s) => s.id).join(", ");
          return {
            content: [
              {
                type: "text" as const,
                text: `Technique "${framework_id}" not found. Available frameworks: ${available}`,
              },
            ],
          };
        }

        return {
          content: [
            {
              type: "text" as const,
              text: [
                `## ${skill.name}`,
                `**Description:** ${skill.description}`,
                "",
                "---",
                "",
                skill.content,
              ].join("\n"),
            },
          ],
        };
      }
    );

    // ── Tool 4: get_profiling_toolkit ─────────────────────────────
    // Returns the master router/dispatcher skill.
    this.server.tool(
      "get_profiling_toolkit",
      "Load the master Profiling Toolkit — the orchestration router that maps profile gaps to frameworks. Contains the full dispatch table, evidence tier system, profile state assessment decision tree, framework combinations, and methodological countermeasures. Use this when you want to understand the full profiling system rather than a single framework.",
      {},
      async () => {
        const toolkit = FRAMEWORK_MAP.get("psychological-profiling-toolkit");
        return {
          content: [
            {
              type: "text" as const,
              text: toolkit?.content ?? "Profiling toolkit not found.",
            },
          ],
        };
      }
    );
  }
}

export default {
  fetch(request: Request, env: Env, ctx: ExecutionContext) {
    const url = new URL(request.url);

    if (url.pathname === "/sse" || url.pathname === "/sse/message") {
      return PsychologicalProfilingToolkit.serveSSE("/sse").fetch(request, env, ctx);
    }

    if (url.pathname === "/mcp") {
      return PsychologicalProfilingToolkit.serve("/mcp").fetch(request, env, ctx);
    }
    if (url.pathname === "/") {
      return new Response(
        JSON.stringify({
          name: "psychological-profiling-toolkit",
          version: "1.0.0",
          description:
            "16-framework psychological profiling toolkit for constructing Cognitive Surrogate Profiles from documentary evidence. Covers personality structure, attachment, cognition, emotion regulation, defence mechanisms, interpersonal strategy, and risk prediction.",
          endpoints: {
            sse: "/sse",
            mcp: "/mcp",
          },
          tools: [
            "list_frameworks",
            "assess",
            "get_framework",
            "get_profiling_toolkit",
          ],
        }, null, 2),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return new Response("Not found", { status: 404 });
  },
};
