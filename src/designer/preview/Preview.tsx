import { Flex } from '../../common/Flex'
import { useTemplateStore } from '../template/useTemplateStore';
import './Preview.css'

export const Preview = () => {
  const { template } = useTemplateStore();

  return (
    <Flex fullWidth>
      {template.name}
    </Flex>
  )
}
