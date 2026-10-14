
import "dotenv/config";
import { OpenAIClient } from "@anvia/openai";

const apiKey = process.env.MUX_API_KEY;
const baseUrl = process.env.MUX_BASE_URL;
const modelId = process.env.MODEL_ID;

if (!apiKey || !baseUrl || !modelId) {
  throw new Error(
    "Missing MUX_API_KEY, MUX_BASE_URL, or MODEL_ID in .env",
  );
}

const client = new OpenAIClient({
  apiKey,
  baseUrl,
});

export const model = client.completionModel({
  modelId,
});
