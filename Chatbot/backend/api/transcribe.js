const OPENAI_TRANSCRIPT_URL = "https://api.openai.com/v1/audio/transcriptions";

function readRequestBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.statusCode = 405;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Method not allowed" }));
    return;
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "OPENAI_API_KEY is not configured" }));
    return;
  }

  try {
    const audioBuffer = await readRequestBody(req);
    if (!audioBuffer.length) {
      res.statusCode = 400;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ error: "Audio payload is empty" }));
      return;
    }

    const contentType = req.headers["content-type"] || "audio/webm";
    const language = typeof req.query?.lang === "string" && req.query.lang.trim() ? req.query.lang.trim() : "en";
    const extension = contentType.includes("ogg") ? "ogg" : contentType.includes("mp4") ? "mp4" : contentType.includes("mpeg") ? "mp3" : "webm";

    const formData = new FormData();
    formData.append("model", "whisper-1");
    formData.append("language", language);
    formData.append("response_format", "json");
    formData.append("file", new Blob([audioBuffer], { type: contentType }), `voice-input.${extension}`);

    const upstream = await fetch(OPENAI_TRANSCRIPT_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`
      },
      body: formData
    });

    const payload = await upstream.json();
    if (!upstream.ok) {
      const message = payload?.error?.message || "OpenAI transcription request failed";
      res.statusCode = upstream.status;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ error: message }));
      return;
    }

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ text: payload.text || "" }));
  } catch (error) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: error.message || "Unexpected transcription error" }));
  }
};
