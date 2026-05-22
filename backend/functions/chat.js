const OPENAI_CHAT_URL = "https://api.openai.com/v1/chat/completions";

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
      body: JSON.stringify({ error: "OPENAI_API_KEY is not configured on the server." })
    };
  }

  try {
    if (!event.body) {
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Payload is empty" })
      };
    }

    const { message, history } = JSON.parse(event.body);
    if (!message) {
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Message is required" })
      };
    }

    const systemPrompt = `You are UniMitra AI, the official student support portal assistant for the School of Arts and Science, Paiyanoor (VMRF). You provide precise, friendly, and helpful academic and administrative assistance.

Core Interaction Rules:
1. Language Adaptability: Always respond in the language or dialect used by the user.
   - If they write in Tamil script (Unicode), reply in clear, professional Tamil.
   - If they write in English, reply in standard English.
   - If they use Tanglish (Tamil phrases written phonetically in Roman script, e.g., 'timetable sollunga', 'exam eppo', 'feesu eppadi pay panrathu', 'tomorrow records submit pannanuma'), respond in warm, natural, friendly Tanglish (using Latin alphabet) to make it highly conversational and easy to understand.
2. Directness: Keep your answers concise, well-structured, and easy to read. Use bullet points for schedules or course lists.
3. Be reassuring, encouraging, and polite.

Official Institutional Data (Provide answers ONLY based on this information):
- UG Courses: B.A Tamil, B.A English, B.Sc Computer Science, B.Sc Chemistry, B.Sc Mathematics, B.Sc Physics, B.C.A, B.Com, B.B.A.
- PG Courses: M.A Tamil, M.A English, M.Sc Computer Science, M.Sc Chemistry, M.Sc Mathematics, M.Sc Physics, M.C.A, M.Com, M.B.A.
- Admissions: Admissions for the 2026 batch are now open. Prospective students can check UG/PG programs and ask about eligibility, necessary documents, and registration flows.
- Semester Examinations: The last date for semester examination registration is June 25, 2026. Hall tickets are released approximately one week before the first exam. Note: Prior tuition fee clearance is mandatory to generate final hall tickets.
- Fees & Installments: The second tuition fee installment payment window opens this coming Monday. Late fees may apply after the deadline. Students can ask about outstanding balance due reminders.
- Official Department Timetables:
  * B.Sc Computer Science: Monday - Programming in C and Mathematics; Tuesday - Data Structures and Digital Fundamentals; Wednesday - DBMS and Programming Lab; Thursday - Java and Web Technology; Friday - Lab Record Review and Aptitude.
  * B.C.A: Monday - Programming Fundamentals and English; Tuesday - Database Concepts and Office Automation; Wednesday - Data Structures and Lab; Thursday - Web Design and Computer Networks; Friday - Mini Project Hour and Class Test.
  * B.A Tamil: Monday - Sangam Literature and Tamil Grammar; Tuesday - Classical Poetry and Communication Tamil; Wednesday - Literary Criticism and Skill Course; Thursday - Translation Studies and Seminar; Friday - Internal Test and Department Activity.
  * B.A English: Monday - Poetry and Grammar; Tuesday - Drama and Spoken English; Wednesday - Fiction and Language Lab; Thursday - Literary Criticism and Communication Skills; Friday - Seminar and Assignment Review.
  * Other courses: Ask the student to mention their specific department, semester, or section to retrieve their precise routine.
- Assignment Reminders: Active reminders are out for practical record submissions, seminar deadlines, and practical reviews. Encourage students to submit records before reviews.`;

    const messages = [
      { role: "system", content: systemPrompt }
    ];

    if (Array.isArray(history)) {
      history.forEach((msg) => {
        if (msg.role === "user" || msg.role === "assistant" || msg.role === "bot") {
          const role = msg.role === "bot" ? "assistant" : msg.role;
          messages.push({ role, content: msg.text || msg.content });
        }
      });
    }

    messages.push({ role: "user", content: message });

    const upstream = await fetch(OPENAI_CHAT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages,
        temperature: 0.7,
        max_tokens: 450
      })
    });

    const payload = await upstream.json();
    if (!upstream.ok) {
      return {
        statusCode: upstream.status,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: payload?.error?.message || "OpenAI completions request failed" })
      };
    }

    const reply = payload.choices?.[0]?.message?.content || "";
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ response: reply })
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: error.message || "Unexpected chat backend error" })
    };
  }
};
