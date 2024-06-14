import create from "zustand";
import { Template } from "./template";

type Store = {
  template: Template;
  setName: (name: string) => void;
};

export const useTemplateStore = create<Store>((set) => ({
  template: { name: "" },
  setName: (name: string) =>
    set((state) => {
      return { ...state, template: { ...state.template, name } };
    }),
}));
