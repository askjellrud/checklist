import { Flex } from '../../common/Flex'
import { useDesignerStore } from '../useDesignerStore'
import './TemplateBuilder.css'

export const TemplateBuilder = () => {
  const designer = useDesignerStore();

  return (
    <Flex vertical fullWidth padding32>
      Name {designer.template.name}
      <button className="btn btn-primary">Click me</button>
    </Flex>
  )
}
