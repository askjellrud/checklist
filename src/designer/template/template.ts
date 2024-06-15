export type Template = {
  id: string;
  title: string;
  items: TemplateItem[];
};

export type TemplateItem = LabelItem | TextItem | TitleItem | SelectItem;

type Item = {
  id: string;
};

export type TitleItem = Item & {
  type: "title";
  label: string;
};

export type LabelItem = Item & {
  type: "label";
  label: string;
};

export type TextItem = Item & {
  type: "text";
  label: string;
  defaultValue: string;
  isMultiline: boolean;
};

export type SelectItem = Item & {
  type: "select";
  label: string;
  style: "checkbox" | "radio" | "dropdown";
  options: string[];
};
