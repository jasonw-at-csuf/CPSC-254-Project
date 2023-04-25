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
    `Translate the following ${data["language"] ?? ""} to ${data["translate"]}`,
    data["code"] ?? ""
  );
  console.log(response);
  return new Response(String(response));
}
