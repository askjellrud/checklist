import { Col, Container, Row } from 'react-bootstrap';
import { Template } from '../builder/template/template';
import { Flex } from '../common/Flex';
import { NewCheck } from './NewCheck';
import { useGetCheckListByTemplate } from '../api/use-get-check-list-by-template';

type Props = {
  template: Template;
};

export const ChecklistDetails: React.FC<Props> = ({ template }) => {

  const getCheckListByTemplate = useGetCheckListByTemplate(template.id);

  if (!getCheckListByTemplate.data) {
    return null;
  }



  return (
    <Flex fullWidth vertical gap8 padding16 style={{ borderTop: "1px dotted #ccc" }}>

      <Container>
        {
          getCheckListByTemplate.data.map((check) => (
            <Row>
              <Col>{check.id}</Col>
              <Col>{check.area}</Col>
              <Col>{check.responsible}</Col>
            </Row>
          ))
        }
      </Container>


      <NewCheck checklistId={template.id} />

    </Flex>)
}
