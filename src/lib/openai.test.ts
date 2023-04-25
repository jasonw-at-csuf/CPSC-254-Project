import { Configuration, OpenAIApi } from "openai";
import { beforeEach, expect, vi, it, describe, afterEach, type Mock } from "vitest";
import { promptGPT } from "./openai";

describe("promptGPT", () => {
  const system = "test-system";
  const question = "test-question";

  vi.mock("openai", () => {
    const OpenAIApi = vi.fn();
    const Configuration = vi.fn();
    OpenAIApi.prototype.createChatCompletion = vi.fn().mockResolvedValue({
      data: {
        choices: [
          {
            message: {
              content: "test-response",
            },
          },
        ],
      },
    });
    return { OpenAIApi, Configuration };
  });

  let mockOpenAI: OpenAIApi;
  beforeEach(() => {
    mockOpenAI = new OpenAIApi(new Configuration({ apiKey: "test-api-key" }));
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should call createChatCompletion with correct arguments", async () => {
    await promptGPT(system, question);
    expect(mockOpenAI.createChatCompletion).toHaveBeenCalledWith({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: system },
        { role: "user", content: question },
      ],
    });
  });

  it("should return the response message content", async () => {
    const result = await promptGPT(system, question);
    expect(result).toEqual("test-response");
  });

  it("should return an empty string if message content is undefined", async () => {
    (mockOpenAI.createChatCompletion as Mock).mockResolvedValueOnce({});
    const result = await promptGPT(system, question);
    expect(result).toEqual("");
  });
});
