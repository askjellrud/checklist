import { LabelItem } from "./items/LabelItem";

export type Template = {
  id: string;
  title: string;
  items: (LabelItem | TextItem)[];
};

type TemplateItem = {
  id: string;
  type: "label" | "text";
};

type LabelItem = TemplateItem & {
  label: string;
  type: "label";
};

type TextItem = TemplateItem & {
  label: string;
  value: string;
  type: "text";
};
