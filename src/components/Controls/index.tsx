import { useBearStore } from "../../stores/BearStore";
import { useVikingStore } from "../../stores/VikingStore";

export function Controls() {
  // const increasePopulation = useBearStore((state) => state.increasePopulation);
  // const decreasePopulation = useBearStore((state) => state.decreasePopulation);
  // const removeAllBears = useBearStore((state) => state.removeAllBears);

  const { increasePopulation, decreasePopulation, removeAllBears } =
    useBearStore();

  const {
    increasePopulation: increaseVikingPopulation,
    decreasePopulation: decreaseVikingPopulation,
    removeAllVikings,
  } = useVikingStore();

  return (
    <>
      <h1>Bears</h1>
      <button onClick={increasePopulation}>Add bear</button>
      <button onClick={decreasePopulation}>Remove bear</button>
      <button onClick={removeAllBears}>Remove all bears</button>
      <h1>Vikings</h1>
      <button onClick={increaseVikingPopulation}>Add viking</button>
      <button onClick={decreaseVikingPopulation}>Remove viking</button>
      <button onClick={removeAllVikings}>Remove all vikings</button>
    </>
  );
}
