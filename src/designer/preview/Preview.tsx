import { Flex } from '../../common/Flex'
import { useTemplateStore } from '../template/useTemplateStore';
import { ChecklistItem } from './ChecklistItem';
import { LabelItem } from './LabelItem';

export const Preview = () => {
  const { template } = useTemplateStore();

  return (
    <Flex vertical style={{ borderLeft: "1px solid #ccc" }} padding32 fullWidth fullHeight>

      <Flex padding8 style={{ fontSize: "24px", fontWeight: "450" }}>
        {template.title}
      </Flex>

      {template.items.map((item, index) => {
        if (item.type === 'label') return (<LabelItem key={index} label={item.label} />);
        return null;
      })}

    </Flex>
  )
}
