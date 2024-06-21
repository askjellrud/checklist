import { Template } from '../builder/template/template';
import { Flex } from '../common/Flex';
import { NewCheck } from './NewCheck';

type Props = {
  template: Template;
};

export const ChecklistDetails: React.FC<Props> = ({ template }) => {

  return (
    <Flex fullWidth vertical gap8 padding16 style={{ borderTop: "1px dotted #ccc" }}>
      <NewCheck onCreated={() => {
        // TODO
      }} />
      {new Date(template.updatedAt).toLocaleString()}
    </Flex>)
}
