import { Button } from 'react-bootstrap';
import { useQueryTemplates } from '../api/use-query-temlates'
import { Flex } from '../common/Flex'
import styles from '../App.module.scss'
import { useAppStore } from '../useAppStore';
import { useTemplateStore } from '../builder/template/useTemplateStore';
import { cloneDeep } from 'lodash';
import { colors } from '../common/colors';

export const Templates = () => {
  const templates = useQueryTemplates();
  const { setSection } = useAppStore();
  const { resetTemplate, setTemplate } = useTemplateStore();

  if (!templates.data) {
    return null;
  }

  return (
    <Flex fullWidth vertical padding16 gap16>
      {templates.data.map((template, index) => (
        <Flex key={index} style={{ border: "1px solid #bbb" }} fullWidth paddingRight16 paddingLeft16 spaceBetween>
          <Flex style={{ fontWeight: "200", fontSize: "18px" }} center fullWidth padding8>
            {template.name}
          </Flex>
          <i className="bi bi-pencil" onClick={() => {
            console.log(template);
            setTemplate(cloneDeep(template));
            setSection('builder');
          }} style={{ fontSize: "18px", WebkitTextStrokeWidth: "0.7px", color: colors.themeDarker, cursor: "pointer" }} />

        </Flex>
      ))}
      <Flex fullWidth center>
        <Button className={styles['app-btn']} onClick={() => {
          resetTemplate();
          setSection('builder');
        }} >Create a new template</Button>
      </Flex>
    </Flex >
  )
}
