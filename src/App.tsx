import "./App.css";

import { useMultipleStore } from "./stores/MultipleStore";

// import { BearCounter } from "./components/BearCounter";
// import { Controls } from "./components/Controls";
// import { VikingCounter } from "./components/VikingCounter";
import { MultipleCounters } from "./components/MultipleCounters";

export default function App() {
  const save = () => {
    const state = JSON.stringify(useMultipleStore.getState().counters);
    const blob = new Blob([state], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "state.json";
    link.click();
  };

  const load = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = async (event) => {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (!file) return;
      const text = await file.text();
      const state = JSON.parse(text);
      useMultipleStore.setState({ counters: state });
    };
    input.click();
  };

  return (
    <>
      <MultipleCounters />
      <button onClick={save}>Save state</button>
      <button onClick={load}>Load state</button>
      {/* <VikingCounter />
      <BearCounter />
      <Controls /> */}
    </>
  );
}
