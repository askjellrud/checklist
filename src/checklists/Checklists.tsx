import { Button } from 'react-bootstrap';
import { useGetTemplateList } from '../api/use-get-template-list'
import { Flex } from '../common/Flex'
import styles from '../App.module.scss'
import { useAppStore } from '../useAppStore';
import { useTemplateStore } from '../builder/template/useTemplateStore';
import { colors } from '../common/colors';
import { Checklist } from './Checklist';

export const Checklists = () => {
  const templates = useGetTemplateList();
  const { setSection } = useAppStore();
  const { resetTemplate } = useTemplateStore();

  if (!templates.data) {
    return null;
  }

  return (
    <Flex style={{ paddingTop: "20px" }} fullWidth vertical paddingLeft16 paddingRight16 gap16>
      {templates.data.map((template, index) => (
        <Flex key={index} style={{ border: "1px solid #bbb", color: template.status === 'published' ? "#333" : colors.muted }} fullWidth spaceBetween>
          <Checklist template={template} />
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
