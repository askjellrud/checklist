import { useTemplateStore } from './useTemplateStore'
import { LabelRenderer } from './items/LabelRenderer';
import { DividerItem, LabelItem, SelectItem, TextItem, TitleItem } from './template';
import { TextRenderer } from './items/TextRenderer';
import { TitleRenderer } from './items/TitleRenderer';
import { SelectRenderer } from './items/SelectRenderer';
import { DividerRenderer } from './items/DividerRenderer';
import { Alert, Button } from 'react-bootstrap';
import styles from '../../App.module.scss';
import { useCreateTemplate } from '../../api/use-create-template';
import { Flex } from '../../common/Flex';
import { useAppStore } from '../../useAppStore';
import { colors } from '../../common/colors';
import { useState } from 'react';
import { cloneDeep } from 'lodash';
import ConfirmButton from '../../common/ConfirmButton';

export const TemplateBuilder = () => {
  const { template } = useTemplateStore();
  const createTemplate = useCreateTemplate(() => {
    setSection('checklists');
  });
  const { setSection } = useAppStore();
  const [showSaveResult, setShowSaveResult] = useState<boolean>(true);

  return (
    <>
      {template.items.map((item, index) => {
        if (item.type === 'label') return (
          <LabelRenderer key={item.id} item={item as LabelItem} />);
        if (item.type === 'title') return (
          <TitleRenderer key={item.id} item={item as TitleItem} isMain={index === 0} />);
        if (item.type === 'text') return (
          <TextRenderer key={item.id} item={item as TextItem} />);
        if (item.type === 'select') return (
          <SelectRenderer key={item.id} item={item as SelectItem} />);
        if (item.type === 'divider') return (
          <DividerRenderer key={item.id} item={item as DividerItem} />);
        return null;
      })}
      {createTemplate.isSuccess && showSaveResult &&
        <Alert variant='light' onClose={() => setShowSaveResult(false)} dismissible>

          <Flex>The checklist is saved. If you are done you can go to the&nbsp;
            <Flex style={{ color: colors.themeDarker }} contents onClick={() => {
              setSection('checklists');
              setShowSaveResult(true);
            }}>checklists</Flex>
          </Flex>
        </Alert>}

      <Flex fullWidth gap16>
        <Button className={styles['app-btn']} onClick={() => {
          createTemplate.mutate(template);
        }}>Save</Button>

        <ConfirmButton
          text='Are you sure you want to publish? No further changes can be done'
          buttonProps={{ className: styles['app-btn'] }} onConfirm={() => {
            const toPublish = cloneDeep(template);
            toPublish.status = 'published';
            createTemplate.mutate(toPublish);
          }}>
          <i className="bi bi-upload" style={{ fontSize: "16px", WebkitTextStrokeWidth: "0.7px", marginRight: "10px", cursor: "pointer" }} />
          Publish
        </ConfirmButton>
      </Flex>
    </>
  )
}
