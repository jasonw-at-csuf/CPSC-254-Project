import { OPENAI_API_KEY } from "$env/static/private";
import { Configuration, OpenAIApi } from "openai";

export async function promptGPT(system: string, question: string) {
  const configuration = new Configuration({
    apiKey: OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: system },
      { role: "user", content: question },
    ],
  });

  console.log(response.data["choices"][0].message?.content);
  return response.data["choices"][0].message?.content;
}
