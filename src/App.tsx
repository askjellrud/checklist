import { Builder } from './builder/Builder'
import { Flex } from './common/Flex'
import { useSectionStore } from './useSectionStore'
import { colors } from './common/colors'
import { Dropdown } from 'react-bootstrap'
import { IconToggle } from './common/IconToggle'
import { ChecklistList } from './checklists/ChecklistList'
import { CheckView } from './check/CheckView'
import { useLocation } from 'react-router-dom'

export const App = () => {
  const { section, setSection } = useSectionStore();
  const check = new URLSearchParams(useLocation().search).get('check');

  return (
    <Flex vertical fullWidth fullHeight>

      <Flex center style={{ height: "64px", color: "white", fontSize: "24px", fontWeight: "600", backgroundColor: colors.theme, position: "relative" }} fullWidth>
        {check ? (
          "Check"
        ) : section === 'builder' ? (
          "Checklist Builder"
        ) : (
          "Checklists"
        )}

        {section === 'builder' &&
          <Flex style={{ position: "absolute", right: "12px" }} >

            <Dropdown>
              <Dropdown.Toggle as={IconToggle}><i style={{ fontSize: "26px", WebkitTextStrokeWidth: "0.7px", color: "white" }} className="bi bi-list" /></Dropdown.Toggle>
              <Dropdown.Menu>

                <Dropdown.Item onClick={() => setSection('checklists')}>
                  Checklists
                </Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>
          </Flex>
        }
      </Flex>

      <Flex style={{ height: "calc(100% - 64px)" }} fullWidth alignStart>
        {check ? (
          <CheckView checkId={check} />
        ) : section === 'builder' ? (
          <Builder />
        ) : (
          <ChecklistList />
        )}
      </Flex>
    </Flex>
  )
}
