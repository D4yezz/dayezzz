import { create } from "zustand";

type MenuState = {
  open: boolean;
  toggle: () => void;
//   openMenu: () => void;
//   closeMenu: () => void;
};

export const useMenuStore = create<MenuState>((set) => ({
  open: false,
  toggle: () => set((state) => ({ open: !state.open })),
//   openMenu: () => set({ open: true }),
//   closeMenu: () => set({ open: false }),
}));
