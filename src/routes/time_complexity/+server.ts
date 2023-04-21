import { getBigO } from "../../lib/bigo";
import { promptGPT } from "../../lib/openai";

export async function POST({ request }): Promise<Response> {
  const data = await request.json();
  console.log(data);
  if (data["code"].length > 2000) {
    return new Response("Code is too long. (Max 2000 characters)");
  }
  const response = await promptGPT(
    "Reply to users with a message containing only the time complexity of given code. Return 0 if there is no complexity to be derived.",
    data["code"] ?? ""
  );
  const time_complexity = getBigO(response ?? "");
  return new Response(String(time_complexity));
}
