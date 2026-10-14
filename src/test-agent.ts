import "dotenv/config";
import { createResearchAgent } from "./research-agent.js";

async function main() {
  console.log("Running Research Report Agent...\n");

  const { agent, sandbox } = await createResearchAgent();

  try {
    const result = await agent.generate({
      prompt:
        "Research the latest developments in AI education and give me a brief report with key findings, benefits, and risks.",
    });

    console.log("Research agent response:\n");
    console.log(result);
  } finally {
    await sandbox.destroy();
    console.log("\nSandbox destroyed.");
  }
}

main().catch((error) => {
  console.error("Agent test failed:", error);
  process.exitCode = 1;
});