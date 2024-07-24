// Test persistence

import { create } from "zustand";
import { persist } from "zustand/middleware";

type Viking = {
  vikings: number;
  increasePopulation: () => void;
  decreasePopulation: () => void;
  removeAllVikings: () => void;
};

export const useVikingStore = create<Viking>()(
  persist(
    (set) => ({
      vikings: 0,
      increasePopulation: () =>
        set((state) => ({ vikings: state.vikings + 1 })),
      decreasePopulation: () =>
        set((state) => ({ vikings: state.vikings - 1 })),
      removeAllVikings: () => set({ vikings: 0 }),
    }),
    {
      name: "viking-counter-storage",
    }
  )
);
