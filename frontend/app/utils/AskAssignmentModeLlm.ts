export async function askAssignmentLLM(question: any, prompt: string) {
  const bodyObj = `The question that I am attemoting answer is as follows: ${question.question}. ${prompt}`;
  console.log(bodyObj);
  const res = await fetch('/api/assignment_llm', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt: bodyObj }),
  });

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const data = await res.json();
  return data;
}
