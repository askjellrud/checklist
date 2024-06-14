export type Template = {
  id: string;
  title: string;
  items: TemplateItem[];
};

export type TemplateItem = LabelItem | TextItem;

type Item = {
  id: string;
  type: "label" | "text";
};

export type LabelItem = Item & {
  label: string;
};

export type TextItem = Item & {
  label: string;
  defaultValue: string;
};
