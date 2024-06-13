import { Flex } from '../common/Flex'
import './Builder.css'
import { Designer } from './designer/Designer'
import { Preview } from './preview/Preview'

export const Builder = () => {
  return (
    <Flex gap16>
      <Designer />
      sad
      <Preview />
    </Flex>
  )
}
