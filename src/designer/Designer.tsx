import { Flex } from '../common/Flex'
import './Designer.css'
import { TemplateBuilder } from './template/TemplateBuilder'
import { Preview } from './preview/Preview'

export const Designer = () => {

  return (
    <Flex gap4 fullWidth fullHeight alignStart>
      <TemplateBuilder />
      <Preview />
    </Flex>
  )
}
