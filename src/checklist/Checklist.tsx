import { cloneDeep } from 'lodash';
import { CheckValue, DividerItem, LabelItem, SelectItem, SelectValue, Template, TextItem, TextValue, TitleItem } from '../builder/template/template';
import { Check } from '../checklists/NewCheck';
import { DividerRenderer } from './items/DividerRenderer';
import { LabelRenderer } from './items/LabelRenderer';
import { SelectRenderer } from './items/SelectRenderer';
import { TextRenderer } from './items/TextRenderer';
import { TitleRenderer } from './items/TitleRenderer';

type Props = {
  mode: 'check' | 'result' | 'builder';
  template: Template;
  check: Check;
  checkChanged: (check: Check) => void;
}

export const Checklist = ({ template, check, checkChanged }: Props) => {

  const valueChanged = (itemId: string, value: CheckValue) => {
    const newCheck = cloneDeep(check);
    newCheck.values[itemId] = value;
    checkChanged(newCheck);
  };

  return (
    <>
      {template.items.map((item) => {
        if (item.type === 'label') return (
          <LabelRenderer key={item.id} item={item as LabelItem} />);
        if (item.type === 'title') return (
          <TitleRenderer key={item.id} item={item as TitleItem} />);
        if (item.type === 'text') return (
          <TextRenderer
            key={item.id}
            item={item as TextItem}
            value={check.values[item.id] as TextValue || { id: item.id, text: item.defaultValue }}
            valueChanged={(value) => valueChanged(item.id, value)}
          />);
        if (item.type === 'select') return (
          <SelectRenderer
            key={item.id}
            item={item as SelectItem}
            value={check.values[item.id] as SelectValue || { id: item.id, selected: [] }}
            valueChanged={(value) => valueChanged(item.id, value)}
          />);
        if (item.type === 'divider') return (
          <DividerRenderer key={item.id} item={item as DividerItem} />);
        return null;
      })}
    </>

  )
}
