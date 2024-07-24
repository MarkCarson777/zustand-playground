import { useVikingStore } from "../../stores/VikingStore";

export function VikingCounter() {
  const vikings = useVikingStore((state) => state.vikings);

  return <h1>{vikings} vikings around here ...</h1>;
}
