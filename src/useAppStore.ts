import { create } from "zustand";

type Section = "builder" | "templates";

type Store = {
  section: Section;
  setSection: (section: Section) => void;
};

export const useAppStore = create<Store>((set) => ({
  section: "templates",
  setSection: (section: Section) =>
    set((state) => {
      return { ...state, section };
    }),
}));
