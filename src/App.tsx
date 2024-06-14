import './App.css'
import { Designer } from './designer/Designer'
import { Flex } from './common/Flex'

export const App = () =>  {

  return (
    <Flex vertical fullWidth fullHeight>
      <Flex center style={{ height: "64px", fontSize:"24px", fontWeight: "600", backgroundColor: "red" }} fullWidth>
        Checklist Builder
      </Flex>
      <Designer />
    </Flex>
  )
}
