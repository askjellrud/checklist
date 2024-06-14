import { Form } from 'react-bootstrap';
import { Flex } from '../../common/Flex'
import { useTemplateStore } from './useTemplateStore'
import { LabelItem } from './items/LabelItem';

export const TemplateBuilder = () => {
  const { template, setTitle } = useTemplateStore();

  return (
    <Flex vertical fullWidth padding32 gap16>
      <Flex fullWidth>
        <Flex paddingRight16>Title</Flex>
        <Form.Control
          type="text"
          placeholder="Checklist name"
          value={template.title}
          onChange={(event) => { setTitle(event.target.value) }}
        />
      </Flex>

      {template.items.map((item, index) => {
        if (item.type === 'label') return (<LabelItem key={index} label={item.label} />);
        return null;
      })};

    </Flex>
  )
}
