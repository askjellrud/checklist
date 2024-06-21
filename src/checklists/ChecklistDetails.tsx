import { Col, Container, Row } from 'react-bootstrap';
import { Template } from '../builder/template/template';
import { Flex } from '../common/Flex';
import { NewCheck } from './NewCheck';

type Props = {
  template: Template;
};

export const ChecklistDetails: React.FC<Props> = ({ template }) => {

  return (
    <Flex fullWidth vertical gap8 padding16 style={{ borderTop: "1px dotted #ccc" }}>


      <Container>
        <Row>
          <Col>Test</Col>
          <Col>Test</Col>
          <Col>Test</Col>
        </Row>
        <Row>
          <Col>Test</Col>
          <Col>Test</Col>
          <Col>Test</Col>
        </Row>
      </Container>

      <NewCheck checklistId={template.id} />

    </Flex>)
}
