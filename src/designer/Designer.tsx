import { Flex } from '../common/Flex'
import { TemplateBuilder } from './template/TemplateBuilder'
import './Designer.css'
import { Preview } from './preview/Preview'

export const Designer = () => {

  return (
    <Flex style={{ height: "calc(100% - 64px)" }} gap4 fullWidth alignStart>
      <TemplateBuilder />
      <Preview />
    </Flex>
  )
}
