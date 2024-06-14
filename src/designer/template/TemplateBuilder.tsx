import { Flex } from '../../common/Flex'
import { useDesignerStore } from '../useDesignerStore'
import './TemplateBuilder.css'

export const TemplateBuilder = () => {
  const designer = useDesignerStore();

  return (
    <Flex fullWidth>
      Name {designer.template.name}
    </Flex>
  )
}
