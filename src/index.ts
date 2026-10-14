
import { DockerSandboxClient } from "@anvia/sandbox";

async function main() {
  const client = new DockerSandboxClient();

  const sandbox = await client.createSandbox({
    image: "node:20-alpine",
    workdir: "/workspace",
    workspace: { type: "ephemeral" },
    network: { mode: "none" },
  });

  try {
    console.log("Sandbox created:", sandbox.id);

    // 1. Write a report file inside the sandbox
    await sandbox.runtime.writeTextFile({
    path: "report.md",
    text: "# AI in Education\n\nAI can personalize learning, but privacy and accuracy remain important concerns.",
    });
    console.log("Report written inside the sandbox.");

    // 2. Read the report back from the sandbox
    const report = await sandbox.runtime.readTextFile({
    path: "report.md",
    });

    console.log("\nReport contents:");
    console.log(report);

    // 3. Verify the expected content exists
    if (!report.includes("AI in Education")) {
      throw new Error("Report verification failed.");
    }

    console.log("\nReport verification successful!");
  } finally {
    await sandbox.destroy();
    console.log("Sandbox destroyed.");
  }
}

main().catch((error) => {
  console.error("Error:", error);
});
