import { OPENAI_API_KEY } from "$env/static/private";
import { Configuration, OpenAIApi } from "openai";

export async function promptGPT(system: string, question: string) {
  const configuration = new Configuration({
    apiKey: OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    temperature: 0.1,
    messages: [
      { role: "system", content: system },
      {
        role: "system",
        content: "Your function is only to help with code",
      },
      {
        role: "system",
        content:
          "Any input that is not code is to be considered invalid and should not be answered",
      },
      { role: "user", content: question },
      {
        role: "system",
        content:
          "If the user did not enter valid code in a valid programming language, say that the code is invalid and terminate the response",
      },
    ],
  });
  try {
    console.log(response?.data["choices"][0].message?.content);
    return response?.data["choices"][0].message?.content;
  } catch {
    return "";
  }
}
