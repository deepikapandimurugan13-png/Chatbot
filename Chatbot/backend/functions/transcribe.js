const OPENAI_TRANSCRIPT_URL = "https://api.openai.com/v1/audio/transcriptions";

function bufferFromEvent(event) {
  if (!event.body) return Buffer.alloc(0);
  return event.isBase64Encoded ? Buffer.from(event.body, "base64") : Buffer.from(event.body);
}

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Method not allowed" })
    };
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "OPENAI_API_KEY is not configured" })
    };
  }

  try {
    const audioBuffer = bufferFromEvent(event);
    if (!audioBuffer.length) {
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Audio payload is empty" })
      };
    }

    const contentType = event.headers["content-type"] || event.headers["Content-Type"] || "audio/webm";
    const language = event.queryStringParameters?.lang?.trim() || "en";
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
      return {
        statusCode: upstream.status,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: payload?.error?.message || "OpenAI transcription request failed" })
      };
    }

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: payload.text || "" })
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: error.message || "Unexpected transcription error" })
    };
  }
};
