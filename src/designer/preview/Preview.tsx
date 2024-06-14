import { Flex } from '../../common/Flex'
import { LabelItem, TextItem, TitleItem } from '../template/template';
import { useTemplateStore } from '../template/useTemplateStore';
import { LabelRenderer } from './items/LabelRenderer';
import { TextRenderer } from './items/TextRenderer';
import { TitleRenderer } from './items/TitleRenderer';

export const Preview = () => {
  const { template } = useTemplateStore();

  return (
    <Flex vertical style={{ borderLeft: "1px solid #ccc" }} padding32 fullWidth fullHeight>



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
