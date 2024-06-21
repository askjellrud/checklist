import { Button, Dropdown } from 'react-bootstrap';
import { useQueryTemplates } from '../api/use-query-temlates'
import { Flex } from '../common/Flex'
import styles from '../App.module.scss'
import { useAppStore } from '../useAppStore';
import { useTemplateStore } from '../builder/template/useTemplateStore';
import { cloneDeep } from 'lodash';
import { colors } from '../common/colors';
import { IconToggle } from '../common/IconToggle';
import { useCreateTemplate } from '../api/use-create-template';
import { useQueryClient } from '@tanstack/react-query';
import { queryKeysTemplates } from '../api/query-keys';

export const Checklists = () => {
  const templates = useQueryTemplates();
  const { setSection } = useAppStore();
  const { resetTemplate, setTemplate } = useTemplateStore();

  const queryClient = useQueryClient();
  const createTemplate = useCreateTemplate(() => {
    queryClient.invalidateQueries({ queryKey: queryKeysTemplates.list() });
  });

  if (!templates.data) {
    return null;
  }

  return (
    <Flex style={{ paddingTop: "20px" }} fullWidth vertical paddingLeft16 paddingRight16 gap16>
      {templates.data.map((template, index) => (
        <Flex key={index} style={{ border: "1px solid #bbb", backgroundColor: template.status === 'published' ? "" : colors.yellowLight }} fullWidth paddingRight16 paddingLeft16 spaceBetween>
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
                    <i className="bi bi-pencil" style={{ fontSize: "16px", WebkitTextStrokeWidth: "0.7px", color: colors.themeDarker, marginRight: "10px", cursor: "pointer" }} />
                    Edit draft
                  </Dropdown.Item>

                  <Dropdown.Item onClick={() => {
                    const toPublish = cloneDeep(template);
                    toPublish.status = 'published';
                    createTemplate.mutate(toPublish);

                  }}>
                    <i className="bi bi-upload" style={{ fontSize: "16px", WebkitTextStrokeWidth: "0.7px", color: colors.themeDarker, marginRight: "10px", cursor: "pointer" }} />
                    Publish draft
                  </Dropdown.Item>
                </>
              }

              {template.status === "published" &&
                <Dropdown.Item onClick={() => {
                  // TODO
                }}>
                  <i className="bi bi-upload" style={{ fontSize: "16px", WebkitTextStrokeWidth: "0.7px", color: colors.themeDarker, marginRight: "10px", cursor: "pointer" }} />
                  Todo
                </Dropdown.Item>
              }

            </Dropdown.Menu>
          </Dropdown>

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
