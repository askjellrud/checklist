import { Button, Dropdown } from 'react-bootstrap';
import { useQueryTemplates } from '../api/use-query-temlates'
import { Flex } from '../common/Flex'
import styles from '../App.module.scss'
import { useAppStore } from '../useAppStore';
import { useTemplateStore } from '../builder/template/useTemplateStore';
import { cloneDeep } from 'lodash';
import { colors } from '../common/colors';
import { IconToggle } from '../common/IconToggle';

export const Checklists = () => {
  const templates = useQueryTemplates();
  const { setSection } = useAppStore();
  const { resetTemplate, setTemplate } = useTemplateStore();

  if (!templates.data) {
    return null;
  }

  return (
    <Flex style={{ paddingTop: "20px" }} fullWidth vertical paddingLeft16 paddingRight16 gap16>
      {templates.data.map((template, index) => (
        <Flex key={index} style={{ border: "1px solid #bbb" }} fullWidth paddingRight16 paddingLeft16 spaceBetween>
          <Flex style={{ fontWeight: "200", fontSize: "18px" }} center fullWidth padding8>
            {template.name}
          </Flex>

          <Dropdown>
            <Dropdown.Toggle as={IconToggle}><i className="bi bi-list" style={{ fontSize: "26px", WebkitTextStrokeWidth: "0.7px" }} /></Dropdown.Toggle>
            <Dropdown.Menu>

              {template.status === "draft" &&
                <>
                  <Dropdown.Item onClick={() => {
                    setTemplate(cloneDeep(template));
                    setSection('builder');
                  }}>
                    <i className="bi bi-pencil" style={{ fontSize: "18px", WebkitTextStrokeWidth: "0.7px", color: colors.themeDarker, marginRight: "16px", cursor: "pointer" }} />
                    Edit
                  </Dropdown.Item>

                  <Dropdown.Item onClick={() => {
                    // TODO
                  }}>
                    <i className="bi bi-upload" style={{ fontSize: "18px", WebkitTextStrokeWidth: "0.7px", color: colors.themeDarker, marginRight: "16px", cursor: "pointer" }} />
                    Publish
                  </Dropdown.Item>
                </>
              }

            </Dropdown.Menu>
          </Dropdown>


          {template.status === "published" &&
            <Flex>todo</Flex>
          }

        </Flex>
      ))}
      <Flex fullWidth center paddingTop8>
        <Button className={styles['app-btn']} onClick={() => {
          resetTemplate();
          setSection('builder');
        }} >Create a new checklist</Button>
      </Flex>
    </Flex >
  )
}
