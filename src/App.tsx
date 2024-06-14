import { Designer } from './designer/Designer'
import { Flex } from './common/Flex'
import './App.css'

export const App = () => {

  return (
    <Flex vertical fullWidth fullHeight>
      <Flex center style={{ height: "64px", color: "white", fontSize: "24px", fontWeight: "600", backgroundColor: "#007BFF" }} fullWidth>
        Checklist Builder
      </Flex>
      <Designer />
    </Flex>
  )
}
