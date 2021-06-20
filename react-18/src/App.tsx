import { useState } from "react";

export default function App() {
  // New batching
  const [count, setCount] = useState(0);

  console.log("render");

  function handleClick() {
    setTimeout(() => {
      setCount((state) => state + 1);
      setCount((state) => state + 1);
    }, 0);
  }

  return (
    <div className="App">
      <h1>Test of new resources in React 18</h1>
      <span>{count}</span>
      <button onClick={() => handleClick()}>Count</button>
    </div>
  );
}
