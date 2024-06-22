import { Checklist } from '../checklist/Checklist'
import { Flex } from '../common/Flex'
import { TemplateBuilder } from './template/TemplateBuilder'

export const Builder = () => {

  return (
    <>
      <Flex style={{ overflow: "auto", resize: "horizontal" }} vertical fullHeight halfWidth padding32 gap16>
        <TemplateBuilder />
      </Flex>
      <Flex vertical style={{ borderLeft: "1px solid #ccc", overflow: "auto" }} padding32 halfWidth fullHeight>
        <Checklist />
      </Flex>
    </>
  )
}
