import create from 'zustand';
import { Template } from './template';

type Store = {
  template: Template;
  setTemplate: (template: Template) => void;
};

export const useDesignerStore = create<Store>((set) => ({
  template: { name: "todo" },
  setTemplate: (template : Template) => set(state => {
    return { ...state, template };
})
}));
