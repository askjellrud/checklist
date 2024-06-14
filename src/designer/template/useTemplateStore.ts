import create from "zustand";
import { Template } from "./template";

type Store = {
  template: Template;
  setName: (name: string) => void;
};

export const useTemplateStore = create<Store>((set) => ({
  template: {
    id: "",
    name: "",
    items: [
      { id: "", type: "label", label: "Hvem er du?" },
      { id: "", type: "label", label: "Hvem er du?" },
    ],
  },
  setName: (name: string) =>
    set((state) => {
      return { ...state, template: { ...state.template, name } };
    }),
}));
