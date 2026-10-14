
import {
  DockerSandboxClient,
  createDockerSandboxTools,
} from "@anvia/sandbox";

const client = new DockerSandboxClient();

export async function createResearchSandbox() {
  const sandbox = await client.createSandbox({
    image: "node:20-alpine",
    workdir: "/workspace",
    workspace: { type: "ephemeral" },
    network: { mode: "none" },
  });

  const tools = createDockerSandboxTools({
    sandbox: sandbox.runtime,
    tools: ["write_file", "read_file", "list_files"],
  });

  return { sandbox, tools };
}
