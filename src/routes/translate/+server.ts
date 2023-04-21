import { promptGPT } from "../../lib/openai.js";

export async function POST({ request }) {
  const data = await request.json();
  console.log(data);
  if (data["code"].length > 2000) {
    return new Response("Code is too long. (Max 2000 characters)");
  }
  const response = await promptGPT(
    `Translate the following ${data["language"] ?? ""} to ${data["translate"]}`,
    data["code"] ?? ""
  );
  console.log(response);
  return new Response(String(response));
}
