import { Designer } from './designer/Designer'
import { Flex } from './common/Flex'
import { Templates } from './templates/Templates'
import { useAppStore } from './useAppStore'

export const App = () => {
  const { section } = useAppStore();

  return (
    <Flex vertical fullWidth fullHeight>

      <Flex center style={{ height: "64px", color: "white", fontSize: "24px", fontWeight: "600", backgroundColor: "#00A859", position: "relative" }} fullWidth>
        {section == 'templates' && "Checklist Templates"}
        {section == 'designer' && "Checklist Builder"}

        <Flex style={{ position: "absolute", right: "12px" }} >
          <i className="bi bi-list" onClick={() => {
          }} style={{ fontSize: "26px", WebkitTextStrokeWidth: "0.7px", color: "white", cursor: "pointer" }} />
        </Flex>
      </Flex>

      <Flex style={{ height: "calc(100% - 64px)" }} fullWidth alignStart>
        {section === "templates" && <Templates />}
        {section === "designer" && <Designer />}
      </Flex>
    </Flex>
  )
}
