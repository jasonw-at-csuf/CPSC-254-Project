import { OPENAI_API_KEY } from "$env/static/private";
import { Configuration, OpenAIApi } from "openai";

export async function POST({ request }) {
  const data = await request.json();
  console.log(data);

  if (data["code"].length > 2000) {
    return new Response("Code is too long. (Max 2000 characters)");
  }

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
          "Reply to users with a message containing only the time complexity of given code. Return 0 if there is no complexity to be derived.",
      },
      { role: "user", content: data["code"] ?? "" },
    ],
  });
  console.log(response.data["choices"][0].message?.content);
  const regex = /O\(.*?\)/;
  const time_complexity =
    response.data["choices"][0].message?.content.match(regex);

  return new Response(String(time_complexity));
}
