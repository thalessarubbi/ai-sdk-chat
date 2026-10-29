import { TypedToolCall, TypedToolResult } from "ai";
import { githubProfile } from "./github-profile";
import { httpFetch } from "./http-fetch";

export type AIToolSet = TypedToolCall<typeof tools>
export type AIToolResult = TypedToolResult<typeof tools>

export const tools = {
  githubProfile,
  httpFetch,
};
