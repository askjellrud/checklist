import { Flex } from '../../common/Flex'
import { LabelItem, TextItem } from '../template/template';
import { useTemplateStore } from '../template/useTemplateStore';
import { LabelRenderer } from './LabelRenderer';
import { TextRenderer } from './TextRenderer';

export const Preview = () => {
  const { template } = useTemplateStore();

  return (
    <Flex vertical style={{ borderLeft: "1px solid #ccc" }} padding32 fullWidth fullHeight>

      <Flex padding8 style={{ fontSize: "24px", fontWeight: "450" }}>
        {template.title}
      </Flex>

      {template.items.map((item, index) => {
        if (item.type === 'label') return (
          <LabelRenderer key={index} item={item as LabelItem} />);
        if (item.type === 'text') return (
          <TextRenderer key={index} item={item as TextItem} />);
        return null;
      })}

    </Flex>
  )
}
