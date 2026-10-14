
import { Agent } from "@anvia/core/agent";
import { model } from "./model.js";
import { createResearchSandbox } from "./sandbox-tools.js";
import { webSearchTool } from "./web-search.js";

export async function createResearchAgent() {
  const { sandbox, tools } = await createResearchSandbox();

  const agent = new Agent({
    id: "research-report-agent",
    name: "Research Report Agent",
    model,
    instructions: `
      You are a research report assistant.

      When asked to research a topic:
      1. Organize the report with a title, introduction,
         main findings, risks or limitations, and conclusion.
      2. Distinguish established facts from uncertainty.
      3. Save the report as report.md using write_file.
      4. Read report.md using read_file to verify its contents.
      5. Use list_files to confirm report.md exists.
      6. Report whether the file was successfully verified.

      Do not invent citations or claim to have searched the web.
      Use relative paths such as report.md.
    `,
    tools: [...tools, webSearchTool],
    maxTurns: 5,
  });

  return { agent, sandbox };
}
