import { useState } from "react";

interface ApiResponse {
  status: number;
  data: unknown;
  headers: Record<string, string>;
}

const TestPage = () => {
  const [method, setMethod] = useState<string>("GET");
  const [url, setUrl] = useState<string>("");
  const [requestBody, setRequestBody] = useState<string>("");
  const [response, setResponse] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResponse(null);

    try {
      const options: RequestInit = {
        method,
        headers: {
          "Content-Type": "application/json",
        },
      };

      if (method !== "GET" && requestBody) {
        try {
          options.body = JSON.stringify(JSON.parse(requestBody));
        } catch {
          setError("요청 본문이 올바른 JSON 형식이 아닙니다.");
          setLoading(false);
          return;
        }
      }

      const res = await fetch(url, options);
      const data = await res.json();

      setResponse({
        status: res.status,
        data,
        headers: Object.fromEntries(res.headers.entries()),
      });
    } catch (err) {
      setError("요청 처리 중 오류가 발생했습니다: " + (err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">API 테스트</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-4">
          <div className="w-1/4">
            <label className="block text-sm font-medium mb-1">메소드</label>
            <select
              value={method}
              onChange={(e) => setMethod(e.target.value)}
              className="w-full p-2 border rounded"
            >
              {["GET", "POST", "PUT", "DELETE", "PATCH"].map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">URL</label>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://api.example.com/endpoint"
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </div>

        {method !== "GET" && (
          <div>
            <label className="block text-sm font-medium mb-1">
              요청 본문 (JSON)
            </label>
            <textarea
              value={requestBody}
              onChange={(e) => setRequestBody(e.target.value)}
              placeholder={'{\n  "key": "value"\n}'}
              className="w-full h-32 p-2 border rounded font-mono"
            />
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-blue-300"
        >
          {loading ? "요청 중..." : "요청 보내기"}
        </button>
      </form>

      {error && (
        <div className="mt-6 p-4 bg-red-100 text-red-700 rounded">{error}</div>
      )}

      {response && (
        <div className="mt-6 space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">응답 상태</h2>
            <div className="p-3 bg-gray-100 rounded">{response.status}</div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">응답 헤더</h2>
            <pre className="p-3 bg-gray-100 rounded overflow-auto">
              {JSON.stringify(response.headers, null, 2)}
            </pre>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">응답 본문</h2>
            <pre className="p-3 bg-gray-100 rounded overflow-auto">
              {JSON.stringify(response.data, null, 2)}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestPage;
