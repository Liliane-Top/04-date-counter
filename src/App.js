import { useState } from "react";

export default function App() {
  return <Counter />;
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  return (
    <div style={{ justifyContent: "center" }}>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>Step: {step}</span>
        {/* <button onClick={() => setStep(step - 1)}>-</button>
        <button onClick={() => setStep(step + 1)}>+</button> */}
      </div>
      <div>
        <button onClick={() => setCount(count - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount(count + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? "Over  " + count + " days it is "
            : Math.abs(count) + " days ago it was "}
          {date.toDateString()}
        </span>
      </p>
      {count === 0 || step === 1 ? (
        ""
      ) : (
        <button onClick={handleReset}>Reset</button>
      )}
    </div>
  );
}
