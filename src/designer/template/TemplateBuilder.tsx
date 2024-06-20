import { useTemplateStore } from './useTemplateStore'
import { LabelRenderer } from './items/LabelRenderer';
import { DividerItem, LabelItem, SelectItem, TextItem, TitleItem } from './template';
import { TextRenderer } from './items/TextRenderer';
import { TitleRenderer } from './items/TitleRenderer';
import { SelectRenderer } from './items/SelectRenderer';
import { DividerRenderer } from './items/DividerRenderer';
import { Button } from 'react-bootstrap';
import styles from '../../App.module.scss';
import { useCreateTemplate } from '../../api/use-create-template';

export const TemplateBuilder = () => {
  const { template } = useTemplateStore();
  const createTemplate = useCreateTemplate();

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
      <Button className={styles['app-btn']} onClick={() => {
        createTemplate.mutate(template);
      }}>Save</Button>
    </>
  )
}
