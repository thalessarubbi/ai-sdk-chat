import { NextRequest } from "next/server";
import {
  convertToModelMessages,
  createUIMessageStreamResponse,
  stepCountIs,
  streamText,
  toUIMessageStream,
} from "ai";
import { openrouter } from "@/src/api/open-router";
import { tools } from "./tools";

export async function POST(request: NextRequest) {
  const { messages } = await request.json();

  const result = streamText({
    model: openrouter.chat("openai/gpt-4o"),
    tools,
    messages: await convertToModelMessages(messages),
    stopWhen: stepCountIs(5),
    instructions: `
      Sempre responda em Markdown sem aspas no início ou fim da mensagem.
    `,
  });

  return createUIMessageStreamResponse({
    stream: toUIMessageStream({ stream: result.stream }),
  });
}
