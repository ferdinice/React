import { useState } from "react";

export default function app() {
  const [advice, setadvice] = useState("");
  async function getadvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setadvice(data.slip.advice);
  }

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getadvice}>get advice</button>
    </div>
  );
}
