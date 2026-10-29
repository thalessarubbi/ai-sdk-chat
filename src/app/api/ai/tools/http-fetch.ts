import z from "zod";

export const httpFetch = {
  description:
    "Essa ferramenta serve para arealizar uma requisição HTTP em uma URL especificada e acessar sua resposta",
  inputSchema: z.object({
    url: z.string().describe("URL a ser requisitada"),
  }),
  execute: async ({ url }: { url: URL }) => {
    const response = await fetch(url);
    const data = await response.text();

    return data;
  },
};
