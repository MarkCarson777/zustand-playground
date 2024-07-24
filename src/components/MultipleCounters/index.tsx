import { useMultipleStore } from "../../stores/MultipleStore";

export function MultipleCounters() {
  const {
    counters,
    updateLabel,
    addCounter,
    removeCounter,
    increase,
    decrease,
    reset,
    theme,
    toggleTheme,
  } = useMultipleStore();

  return (
    <div className={`${theme}`}>
      <button onClick={addCounter}>Add counter</button>
      {counters.map((counter) => (
        <div>
          <input
            value={counter.label}
            onChange={(e) => updateLabel(counter.id, e.target.value)}
          />
          <h1>
            {counter.label}: {counter.count}
          </h1>
          <button onClick={() => increase(counter.id)}>Increase</button>
          <button onClick={() => decrease(counter.id)}>Decrease</button>
          <button onClick={() => reset(counter.id)}>Reset</button>
          <button onClick={() => removeCounter(counter.id)}>Remove</button>
        </div>
      ))}
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
}
