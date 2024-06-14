export type Template = {
  id: string;
  title: string;
  items: TemplateItem[];
};

export type TemplateItem = LabelItem | TextItem | TitleItem;

type Item = {
  id: string;
  type: "label" | "text" | "title";
};

export type TitleItem = Item & {
  label: string;
};

export type LabelItem = Item & {
  label: string;
};

export type TextItem = Item & {
  label: string;
  defaultValue: string;
};
