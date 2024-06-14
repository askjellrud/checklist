import { Flex } from '../../common/Flex'
import { useTemplateStore } from '../template/useTemplateStore';
import './Preview.css'

export const Preview = () => {
  const { template } = useTemplateStore();

  return (
    <Flex vertical style={{ borderLeft: "1px solid #ccc" }} padding32 fullWidth fullHeight>
      {template.name}
    </Flex>
  )
}
