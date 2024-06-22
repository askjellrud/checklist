import { cloneDeep } from 'lodash';
import { Template } from '../builder/template/template';
import { Flex } from '../common/Flex';
import { useTemplateStore } from '../builder/template/useTemplateStore';
import { useAppStore } from '../useAppStore';
import { colors } from '../common/colors';
import { useState } from 'react';
import { ChecklistRowDetails } from './ChecklistRowDetails';

type Props = {
  template: Template;
};

export const ChecklistRow: React.FC<Props> = ({ template }) => {
  const { setTemplate } = useTemplateStore();
  const { setSection } = useAppStore();
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Flex fullWidth vertical>
      <Flex fullWidth paddingLeft16 paddingRight16 paddingTop4 paddingBottom4>
        <Flex style={{ fontWeight: template.status === 'published' ? "400" : "200", fontSize: "18px" }} center fullWidth padding8>
          {template.name}
        </Flex>

        {template.status === "draft" &&
          <i className="bi bi-pencil" onClick={() => {
            setTemplate(cloneDeep(template));
            setSection('builder');
          }} style={{ fontSize: "18px", WebkitTextStrokeWidth: "0.3px", color: colors.themeDarker, marginRight: "10px", cursor: "pointer" }} />
        }

        {template.status === "published" &&
          <i className="bi bi-three-dots" onClick={() => {
            setShowDetails(!showDetails);
          }} style={{ fontSize: "18px", WebkitTextStrokeWidth: "0.3px", color: colors.themeDarker, marginRight: "10px", cursor: "pointer" }} />
        }
      </Flex>
      {showDetails &&
        <ChecklistRowDetails template={template} />}
    </Flex>
  )
}
