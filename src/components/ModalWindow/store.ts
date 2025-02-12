import { create } from "zustand";

interface modalState {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const useModalWindow = create<modalState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
