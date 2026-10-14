import { createTool } from "@anvia/core/tool";
import { z } from "zod";
import { tavily } from "@tavily/core";

const tavilyClient = tavily({
  apiKey: process.env.TAVILY_API_KEY!,
});

export const webSearchTool = createTool({
  name: "web_search",
  description:
    "Search the web for current information and return relevant results.",
  inputSchema: z.object({
    query: z.string().min(1).describe("The search query"),
  }),
  outputSchema: z.array(
    z.object({
      title: z.string(),
      url: z.string(),
      content: z.string(),
    }),
  ),
  execute: async ({ query }) => {
    const response = await tavilyClient.search(query);

    return response.results.map((result) => ({
      title: result.title,
      url: result.url,
      content: result.content,
    }));
  },
});