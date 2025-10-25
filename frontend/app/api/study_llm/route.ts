export async function POST(req: Request) {
  const { prompt } = await req.json();

  const response = await fetch('http://127.0.0.1:5000/api/study_llm', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt }),
  });

  const data = await response.json();
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
