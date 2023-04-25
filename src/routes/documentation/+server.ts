import { stripCodeBlocks } from "$lib/strip";
import { promptGPT } from "../../lib/openai";
import type { RequestEvent } from "./$types";

export async function POST({
  request,
}: {
  request: RequestEvent["request"];
}): Promise<Response> {
  const data = await request.json();
  console.log(data);
  if (data["code"].length > 2000) {
    return new Response("Code is too long. (Max 2000 characters)");
  }
  const response = await promptGPT(
    `Write a ${data["language"]} docstring comment for the following code in the appropriate language, include inputs and outputs`,
    data["code"] ?? ""
  );
  console.log(response);
  return new Response(String(stripCodeBlocks(response ?? "")));
}
