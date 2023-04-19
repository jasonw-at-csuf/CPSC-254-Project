import { OPENAI_API_KEY } from "$env/static/private";
import { Configuration, OpenAIApi } from "openai";

export async function POST({ request }) {
  const data = await request.json();
  console.log(data);

  const configuration = new Configuration({
    apiKey: OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "What is the average time complexity of the following code? Do not elaborate on the code, just give the time complexity.",
      },
      { role: "user", content: data["code"] ?? "" },
    ],
  });
  console.log(response.data["choices"][0].message?.content);
  const regex = /O\(.*?\)/g;
  const time_complexity =
    response.data["choices"][0].message?.content.match(regex);

  return new Response(String(time_complexity));
}
