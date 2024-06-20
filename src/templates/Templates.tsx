import { Button } from 'react-bootstrap';
import { useQueryTemplates } from '../api/use-query-temlates'
import { Flex } from '../common/Flex'
import styles from '../App.module.scss'
import { useAppStore } from '../useAppStore';
import { useTemplateStore } from '../designer/template/useTemplateStore';

export const Templates = () => {
  const templates = useQueryTemplates();
  const { setSection } = useAppStore();
  const { resetTemplate } = useTemplateStore();

  if (!templates.data) {
    return null;
  }

  return (
    <Flex fullWidth vertical padding16 gap16>
      {templates.data.map((template, index) => (
        <Flex key={index} style={{ border: "1px solid #bbb" }} fullWidth paddingRight16 spaceBetween>
          <Flex center fullWidth padding8>
            {template.name}
          </Flex>
          <Flex>...</Flex>
        </Flex>
      ))}
      <Flex fullWidth center>
        <Button className={styles['app-btn']} onClick={() => {
          resetTemplate();
          setSection('designer');
        }} >Create a new template</Button>
      </Flex>
    </Flex >
  )
}
