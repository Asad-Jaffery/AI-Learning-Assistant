export async function askStudyLLM(slides: any, prompt: string) {
  console.log(slides);

  const slidesJson = JSON.stringify(slides, null, 2);

  const bodyObj = `Here are the slides that my instructor gave me:\n\n${slidesJson}\n\n${prompt}`;
  console.log(bodyObj);

  const res = await fetch('/api/study_llm', {
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
