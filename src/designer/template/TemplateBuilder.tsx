import { Button, Form } from 'react-bootstrap';
import { Flex } from '../../common/Flex'
import { useTemplateStore } from './useTemplateStore'
import './TemplateBuilder.css'

export const TemplateBuilder = () => {
  const { template, setName } = useTemplateStore();

  return (
    <Flex vertical fullWidth padding32>
      Name {template.name}
      <Button>click me2</Button>

      <Form>
        <Form.Group controlId="formBasicInput">
          <Form.Label>Text Input</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter text"
            value={template.name}
            onChange={(event) => { setName(event.target.value)}}
          />
        </Form.Group>
      </Form>
    </Flex>
  )
}
