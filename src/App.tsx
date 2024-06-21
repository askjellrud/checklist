import { Builder } from './builder/Builder'
import { Flex } from './common/Flex'
import { Templates } from './templates/Templates'
import { useAppStore } from './useAppStore'
import { colors } from './common/colors'
import { Dropdown } from 'react-bootstrap'
import { IconToggle } from './common/IconToggle'

export const App = () => {
  const { section, setSection } = useAppStore();

  return (
    <Flex vertical fullWidth fullHeight>

      <Flex center style={{ height: "64px", color: "white", fontSize: "24px", fontWeight: "600", backgroundColor: colors.theme, position: "relative" }} fullWidth>
        {section == 'templates' && "Checklist Templates"}
        {section == 'builder' && "Checklist Builder"}

        <Flex style={{ position: "absolute", right: "12px" }} >



          <Dropdown>
            <Dropdown.Toggle as={IconToggle}><i style={{ fontSize: "26px", WebkitTextStrokeWidth: "0.7px", color: "white" }} className="bi bi-list" /></Dropdown.Toggle>
            <Dropdown.Menu>

              <Dropdown.Item onClick={() => setSection('templates')}>
                Templates
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSection('builder')}>
                Designer
              </Dropdown.Item>

            </Dropdown.Menu>
          </Dropdown>
        </Flex>
      </Flex>

      <Flex style={{ height: "calc(100% - 64px)" }} fullWidth alignStart>
        {section === "templates" && <Templates />}
        {section === "builder" && <Builder />}
      </Flex>
    </Flex>
  )
}
