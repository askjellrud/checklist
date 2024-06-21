import { cloneDeep } from 'lodash';
import { Template } from '../builder/template/template';
import { Flex } from '../common/Flex';
import { useTemplateStore } from '../builder/template/useTemplateStore';
import { useAppStore } from '../useAppStore';
import { colors } from '../common/colors';

type Props = {
  template: Template;
};

export const Checklist: React.FC<Props> = ({ template }) => {
  const { setTemplate } = useTemplateStore();
  const { setSection } = useAppStore();

  return (
    <>

      <Flex style={{ fontWeight: template.status === 'published' ? "400" : "200", fontSize: "18px" }} center fullWidth padding8>
        {template.name}
      </Flex>

      {template.status === "draft" &&
        <>
          <i className="bi bi-pencil" onClick={() => {
            setTemplate(cloneDeep(template));
            setSection('builder');
          }} style={{ fontSize: "20px", WebkitTextStrokeWidth: "0.7px", color: colors.themeDarker, marginRight: "10px", cursor: "pointer" }} />

        </>
      }

      {template.status === "published" &&
        <i className="bi bi-three-dots" onClick={() => {
          // TODO
        }} style={{ fontSize: "16px", WebkitTextStrokeWidth: "0.7px", color: colors.themeDarker, marginRight: "10px", cursor: "pointer" }} />
      }
    </>)
}
