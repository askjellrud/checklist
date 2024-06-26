import { cloneDeep } from 'lodash';
import { CheckData, DividerItem, LabelItem, SelectItem, SelectData, Template, TextItem, TextData, TitleItem } from '../builder/template/template';
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

  const valueChanged = (itemId: string, data: CheckData) => {
    const newCheck = cloneDeep(check);
    newCheck.data[itemId] = data;
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
            data={check.data[item.id] as TextData || { value: item.defaultValue } as TextData}
            dataChanged={(value) => valueChanged(item.id, value)}
          />);
        if (item.type === 'select') return (
          <SelectRenderer
            key={item.id}
            item={item as SelectItem}
            data={check.data[item.id] as SelectData || { values: [] } as SelectData}
            dataChanged={(value) => valueChanged(item.id, value)}
          />);
        if (item.type === 'divider') return (
          <DividerRenderer key={item.id} item={item as DividerItem} />);
        return null;
      })}
    </>

  )
}
