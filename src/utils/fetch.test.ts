import { EventEmitter } from "events";
import * as https from "https";
import type { Mocked } from "vitest";
import { getContent } from "./fetch";

vi.mock("https");

const mockedHttps = https as Mocked<typeof https>;

const makeMockRequest = () => {
  const req = new EventEmitter() as EventEmitter & {
    destroy: ReturnType<typeof vi.fn>;
    end: ReturnType<typeof vi.fn>;
  };
  req.destroy = vi.fn();
  req.end = vi.fn().mockImplementation((cb?: () => void) => {
    cb?.();
    return req;
  });
  return req;
};

const makeMockResponse = (statusCode: number, headers: Record<string, string> = {}) => {
  const res = new EventEmitter() as EventEmitter & {
    statusCode: number;
    statusMessage: string;
    headers: Record<string, string>;
    setEncoding: ReturnType<typeof vi.fn>;
  };
  res.statusCode = statusCode;
  res.statusMessage = statusCode >= 400 ? "Not Found" : "OK";
  res.headers = headers;
  res.setEncoding = vi.fn();
  return res;
};

describe("getContent", () => {
  beforeEach(() => vi.clearAllMocks());

  it("resolves with body on 200 response", async () => {
    const req = makeMockRequest();
    const res = makeMockResponse(200);

    mockedHttps.get.mockImplementation((_url: unknown, cb: unknown) => {
      (cb as (r: typeof res) => void)(res);
      return req as unknown as ReturnType<typeof https.get>;
    });

    const promise = getContent("https://example.com");
    res.emit("data", "hello ");
    res.emit("data", "world");
    res.emit("end");

    await expect(promise).resolves.toBe("hello world");
  });

  it("rejects on 4xx status code", async () => {
    const req = makeMockRequest();
    const res = makeMockResponse(404);

    mockedHttps.get.mockImplementation((_url: unknown, cb: unknown) => {
      (cb as (r: typeof res) => void)(res);
      return req as unknown as ReturnType<typeof https.get>;
    });

    await expect(getContent("https://example.com")).rejects.toThrow("Not Found");
  });

  it("follows 3xx redirect", async () => {
    const req1 = makeMockRequest();
    const req2 = makeMockRequest();
    const res1 = makeMockResponse(301, { location: "https://redirected.com" });
    const res2 = makeMockResponse(200);

    let calls = 0;
    mockedHttps.get.mockImplementation((_url: unknown, cb: unknown) => {
      calls++;
      if (calls === 1) {
        (cb as (r: typeof res1) => void)(res1);
        return req1 as unknown as ReturnType<typeof https.get>;
      }
      (cb as (r: typeof res2) => void)(res2);
      setTimeout(() => {
        res2.emit("data", "redirected");
        res2.emit("end");
      }, 0);
      return req2 as unknown as ReturnType<typeof https.get>;
    });

    await expect(getContent("https://example.com")).resolves.toBe("redirected");
  });

  it("rejects on request error", async () => {
    const req = makeMockRequest();

    mockedHttps.get.mockImplementation(() => req as unknown as ReturnType<typeof https.get>);

    const promise = getContent("https://example.com");
    req.emit("error", new Error("connection refused"));

    await expect(promise).rejects.toThrow("connection refused");
  });

  it("destroys request on timeout", async () => {
    const req = makeMockRequest();

    mockedHttps.get.mockImplementation(() => req as unknown as ReturnType<typeof https.get>);

    void getContent("https://example.com");
    req.emit("timeout");

    expect(req.destroy).toHaveBeenCalled();
  });
});
