import { create } from "zustand";

type Section = "builder" | "checklists" | "check";

type Store = {
  section: Section;
  setSection: (section: Section) => void;
};

export const useSectionStore = create<Store>((set) => ({
  section: "checklists",
  setSection: (section: Section) =>
    set((state) => {
      return { ...state, section };
    }),
}));
