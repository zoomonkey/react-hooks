import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("START - Count:", count);

    return () => {
      console.log("CLEANUP - Count:", count);
    };
  }, []);

  return (
    <div>
      <h1>useEffect Example</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>Increase 1</button>
    </div>
  );
}

export default App;
