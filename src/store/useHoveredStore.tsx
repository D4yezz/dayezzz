import { create } from "zustand";

type MenuState = {
  index: number | null;
  setIndex: (index: number | null) => void;
};

export const useHoveredStore = create<MenuState>((set) => ({
  index: null,
  setIndex: (index: number | null) => set(() => ({ index })),
}));
