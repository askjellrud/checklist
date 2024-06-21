import { Template } from '../builder/template/template';
import { Flex } from '../common/Flex';

type Props = {
  template: Template;
};

export const ChecklistDetails: React.FC<Props> = ({ template }) => {

  return (
    <Flex fullWidth padding16 style={{ borderTop: "1px dotted #ccc" }}>
      {template.id}
      details...
    </Flex>)
}
