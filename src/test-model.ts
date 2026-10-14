
import { generateCompletion } from "@anvia/core/completion";
import { model } from "./model.js";

async function main() {
  console.log("Testing Devscale model connection...");

  const result = await generateCompletion({
    model,
    messages: [
      {
        role: "user",
        content: "Reply with exactly: Model connection successful!",
      },
    ],
  });

  console.log("Model response:");
  console.log(result);
}

main().catch((error) => {
  console.error("Model test failed:", error);
  process.exitCode = 1;
});
