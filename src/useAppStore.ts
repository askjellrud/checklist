import { create } from "zustand";

type Section = "builder" | "checklists";

type Store = {
  section: Section;
  setSection: (section: Section) => void;
};

export const useAppStore = create<Store>((set) => ({
  section: "checklists",
  setSection: (section: Section) =>
    set((state) => {
      return { ...state, section };
    }),
}));
