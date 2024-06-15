import { Flex } from '../../common/Flex'
import { useTemplateStore } from './useTemplateStore'
import { LabelRenderer } from './items/LabelRenderer';
import { LabelItem, SelectItem, TextItem, TitleItem } from './template';
import { TextRenderer } from './items/TextRenderer';
import { TitleRenderer } from './items/TitleRenderer';
import { SelectRenderer } from './items/SelectRenderer';

export const TemplateBuilder = () => {
  const { template } = useTemplateStore();

  return (
    <Flex vertical fullWidth padding32 gap16>
      {template.items.map((item) => {
        if (item.type === 'label') return (
          <LabelRenderer key={item.id} item={item as LabelItem} />);
        if (item.type === 'title') return (
          <TitleRenderer key={item.id} item={item as TitleItem} />);
        if (item.type === 'text') return (
          <TextRenderer key={item.id} item={item as TextItem} />);
        if (item.type === 'select') return (
          <SelectRenderer key={item.id} item={item as SelectItem} />);
        return null;
      })}

    </Flex>
  )
}
