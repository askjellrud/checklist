import { Flex } from '../common/Flex'
import { TemplateBuilder } from './template/TemplateBuilder'
import { Preview } from './preview/Preview'

export const Designer = () => {

  return (
    <Flex style={{ height: "calc(100% - 64px)" }} fullWidth alignStart>
      <Flex style={{ overflow: "auto", resize: "horizontal" }} vertical fullHeight halfWidth padding32 gap16>
        <TemplateBuilder />
      </Flex>
      <Flex vertical style={{ borderLeft: "1px solid #ccc", overflow: "auto" }} padding32 halfWidth fullHeight>
        <Preview />
      </Flex>
    </Flex>
  )
}
