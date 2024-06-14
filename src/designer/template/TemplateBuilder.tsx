import { Form } from 'react-bootstrap';
import { Flex } from '../../common/Flex'
import { useTemplateStore } from './useTemplateStore'
import { LabelRenderer } from './items/LabelRenderer';
import { LabelItem, TextItem } from './template';
import { TextRenderer } from './items/TextRenderer';

export const TemplateBuilder = () => {
  const { template, setTitle } = useTemplateStore();

  return (
    <Flex vertical fullWidth padding32 gap16>
      <Flex fullWidth>
        <Flex paddingRight16>Title</Flex>
        <Form.Control
          type="text"
          placeholder=""
          value={template.title}
          onChange={(event) => { setTitle(event.target.value) }}
        />
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
