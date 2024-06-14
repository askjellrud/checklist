import create from "zustand";
import { Template, TemplateItem } from "./template";
import { randomId } from "../../common/string";

type Store = {
  template: Template;
  setTitle: (title: string) => void;
  updateItem: (item: TemplateItem) => void;
  removeItem: (item: TemplateItem) => void;
  moveItem: (item: TemplateItem, direction: number) => void;
  addItemAfter: (item: TemplateItem, newItem: TemplateItem) => void;
};

export const useTemplateStore = create<Store>((set) => ({
  template: {
    id: "",
    title: "",
    items: [
      {
        id: randomId(),
        type: "title",
        label: "",
      },
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
  removeItem: (item: TemplateItem) =>
    set((state) => {
      const newItems = state.template.items.filter((i) => i.id !== item.id);
      return { ...state, template: { ...state.template, items: newItems } };
    }),
  moveItem: (item: TemplateItem, direction: number) =>
    set((state) => {
      const items = [...state.template.items];
      const from = items.map((e) => e.id).indexOf(item.id);
      if (from <= 1 || from >= items.length) {
        return state;
      }

      let to = from + direction;
      to = to < 1 ? 1 : to; // 0 is reserved for title
      to = to >= items.length ? items.length - 1 : to;

      const temp = items[to];
      items[to] = items[from];
      items[from] = temp;

      return { ...state, template: { ...state.template, items } };
    }),
  addItemAfter: (item: TemplateItem, newItem: TemplateItem) =>
    set((state) => {
      const items = [...state.template.items];
      const index = items.map((e) => e.id).indexOf(item.id) + 1;
      items.splice(index, 0, newItem);

      return { ...state, template: { ...state.template, items } };
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
