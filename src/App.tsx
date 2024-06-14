import './App.css'
import { Designer } from './designer/Designer'
import { Flex } from './common/Flex'

export const App = () =>  {

  return (
    <Flex fullWidth>
      <Designer />
    </Flex>
  )
}
