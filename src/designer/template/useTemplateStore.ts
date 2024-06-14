import create from "zustand";
import { Template, TemplateItem } from "./template";
import { randomId } from "../../common/string";

type Store = {
  template: Template;
  setTitle: (title: string) => void;
  updateItem: (item: TemplateItem) => void;
};

export const useTemplateStore = create<Store>((set) => ({
  template: {
    id: "",
    title: "",
    items: [
      {
        id: randomId(),
        type: "label",
        label: "Hei, dette er en undersøkelse...",
      },
      {
        id: randomId(),
        type: "text",
        label: "Hvem er du?",
        defaultValue: "Aner ikke",
      },
      { id: randomId(), type: "label", label: "Nå er du ferdig." },
    ],
  },
  setTitle: (title: string) =>
    set((state) => {
      return { ...state, template: { ...state.template, title } };
    }),
  updateItem: (item: TemplateItem) =>
    set((state) => {
      const found = state.template.items.some((i) => i.id === item.id);
      if (!found) {
        throw new Error(`TemplateBuilder did not find item ${item.id}`);
      }

      const newItems = state.template.items.map((i) =>
        i.id === item.id ? item : i
      );

      return {
        ...state,
        template: {
          ...state.template,
          items: newItems,
        },
      };
    }),
}));
