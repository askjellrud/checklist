import { Flex } from '../../common/Flex'
import { useTemplateStore } from './useTemplateStore'
import { LabelRenderer } from './items/LabelRenderer';
import { LabelItem, TextItem, TitleItem } from './template';
import { TextRenderer } from './items/TextRenderer';
import { TitleRenderer } from './items/TitleRenderer';

export const TemplateBuilder = () => {
  const { template } = useTemplateStore();

  return (
    <Flex vertical fullWidth padding32 gap16>
      {template.items.map((item, index) => {
        if (item.type === 'label') return (
          <LabelRenderer key={index} item={item as LabelItem} />);
        if (item.type === 'title') return (
          <TitleRenderer key={index} item={item as TitleItem} />);
        if (item.type === 'text') return (
          <TextRenderer key={index} item={item as TextItem} />);
        return null;
      })}

    </Flex>
  )
}
