import { create } from "zustand";
import { persist } from "zustand/middleware";

type MultipleStore = {
  theme: "light" | "dark";
  toggleTheme: () => void;
  counters: { id: number; count: number }[];
  updateLabel: (id: number, label: string) => void;
  addCounter: () => void;
  removeCounter: (id: number) => void;
  increase: (id: number) => void;
  decrease: (id: number) => void;
  reset: (id: number) => void;
};

export const useMultipleStore = create<MultipleStore>()(
  persist(
    (set) => ({
      theme: "light",
      toggleTheme: () =>
        set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
      counters: [{ id: 1, count: 0, label: "Counter 1" }],
      updateLabel: (id, label) => {
        set((state) => ({
          counters: state.counters.map((counter) =>
            counter.id === id ? { ...counter, label } : counter
          ),
        }));
      },
      addCounter: () =>
        set((state) => {
          const maxId = state.counters.reduce(
            (max, counter) => Math.max(max, counter.id),
            0
          );
          return {
            counters: [...state.counters, { id: maxId + 1, count: 0 }],
          };
        }),
      removeCounter: (id) =>
        set((state) => ({
          counters: state.counters.filter((counter) => counter.id !== id),
        })),
      increase: (id) =>
        set((state) => ({
          counters: state.counters.map((counter) =>
            counter.id === id
              ? { ...counter, count: counter.count + 1 }
              : counter
          ),
        })),
      decrease: (id) =>
        set((state) => ({
          counters: state.counters.map((counter) =>
            counter.id === id
              ? { ...counter, count: counter.count - 1 }
              : counter
          ),
        })),
      reset: (id) =>
        set((state) => ({
          counters: state.counters.map((counter) =>
            counter.id === id ? { ...counter, count: 0 } : counter
          ),
        })),
    }),
    {
      name: "counters-storage",
    }
  )
);
