import { Button } from 'react-bootstrap';
import { useGetTemplateList } from '../api/use-get-template-list'
import { Flex } from '../common/Flex'
import styles from '../App.module.scss'
import { useSectionStore } from '../useSectionStore';
import { useTemplateStore } from '../builder/template/useTemplateStore';
import { colors } from '../common/colors';
import { ChecklistRow } from './ChecklistRow';

export const ChecklistList = () => {
  const templates = useGetTemplateList();
  const { setSection } = useSectionStore();
  const { resetTemplate } = useTemplateStore();

  if (!templates.data) {
    return null;
  }

  return (
    <Flex fullWidth vertical paddingTop32 paddingLeft16 paddingRight16 gap16>

      {templates.data.map((template, index) => (
        <Flex key={index} style={{ border: "1px solid #bbb", color: template.status === 'published' ? "#333" : colors.muted }} fullWidth spaceBetween>
          <ChecklistRow template={template} />
        </Flex>
      ))}
      <Flex fullWidth center paddingTop16>
        <Button className={styles['app-btn']} onClick={() => {
          resetTemplate();
          setSection('builder');
        }} >Create a new checklist</Button>
      </Flex>
    </Flex >
  )
}
