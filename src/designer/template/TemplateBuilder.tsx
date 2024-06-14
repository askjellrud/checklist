import { Form } from 'react-bootstrap';
import { Flex } from '../../common/Flex'
import { useTemplateStore } from './useTemplateStore'
import './TemplateBuilder.css'
import { LabelItem } from './items/LabelItem';

export const TemplateBuilder = () => {
  const { template, setName } = useTemplateStore();

  return (
    <Flex vertical fullWidth padding32 gap16>
      <Flex fullWidth>
        <Flex paddingRight16>Name</Flex>
        <Form.Control
          type="text"
          placeholder="Checklist name"
          value={template.name}
          onChange={(event) => { setName(event.target.value) }}
        />
      </Flex>

      <LabelItem label='Hello world' />

    </Flex>
  )
}
