import create from "zustand";
import { Template } from "./template";

type Store = {
  template: Template;
  setTitle: (title: string) => void;
};

export const useTemplateStore = create<Store>((set) => ({
  template: {
    id: "",
    title: "",
    items: [
      { id: "", type: "label", label: "Hvem er du?" },
      { id: "", type: "label", label: "Hvem er du?" },
    ],
  },
  setTitle: (title: string) =>
    set((state) => {
      return { ...state, template: { ...state.template, title } };
    }),
}));
