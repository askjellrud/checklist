import { DividerItem, LabelItem, SelectItem, Template, TextItem, TitleItem } from '../builder/template/template';
import { DividerRenderer } from './items/DividerRenderer';
import { LabelRenderer } from './items/LabelRenderer';
import { SelectRenderer } from './items/SelectRenderer';
import { TextRenderer } from './items/TextRenderer';
import { TitleRenderer } from './items/TitleRenderer';

type Props = {
  template: Template;
}

export const Checklist = ({ template }: Props) => {

  return (
    <>
      {template.items.map((item) => {
        if (item.type === 'label') return (
          <LabelRenderer key={item.id} item={item as LabelItem} />);
        if (item.type === 'title') return (
          <TitleRenderer key={item.id} item={item as TitleItem} />);
        if (item.type === 'text') return (
          <TextRenderer key={item.id} item={item as TextItem} />);
        if (item.type === 'select') return (
          <SelectRenderer key={item.id} item={item as SelectItem} />);
        if (item.type === 'divider') return (
          <DividerRenderer key={item.id} item={item as DividerItem} />);
        return null;
      })}
    </>

  )
}
