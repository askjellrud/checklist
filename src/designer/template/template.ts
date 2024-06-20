export type Template = {
  id: string;
  name: string;
  items: TemplateItem[];
};

export type TemplateItem =
  | LabelItem
  | TextItem
  | TitleItem
  | SelectItem
  | DividerItem;

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

export type DividerItem = Item & {
  type: "divider";
  label: string;
};

export type TextItem = Item & {
  type: "text";
  label: string;
  defaultValue: string;
  isMultiline: boolean;
};

export type SelectItemStyle = "checkbox" | "radio" | "dropdown";

export type SelectItem = Item & {
  type: "select";
  label: string;
  style: SelectItemStyle;
  options: string[];
};
