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

  const data = getCheckListByTemplate.data;

  if (!data) {
    return null;
  }



  return (
    <Flex fullWidth vertical gap8 padding16 style={{ borderTop: "1px dotted #ccc" }}>

      {data &&
        <Container>
          <Row style={{ padding: '8px', backgroundColor: '#e9ecef', borderBottom: '1px solid #ccc' }}>
            <Col style={{ flex: 1 }}>Date</Col>
            <Col style={{ flex: 3 }}>Area</Col>
            <Col style={{ flex: 3 }}>Responsible</Col>
            <Col style={{ maxWidth: '50px' }}>QR</Col>
            <Col style={{ maxWidth: '70px' }}>Check</Col>
          </Row>
          {data.map((check) => (
            <Row style={{ marginTop: "8px", padding: "8px", backgroundColor: "#fafafa", borderBottom: "1px dotted #ccc" }}>
              <Col style={{ flex: 1 }}>{check.checkAt ? new Date().toLocaleDateString('en-GB').replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$1/$2-$3') : "?"}</Col>
              <Col style={{ flex: 3 }}>{check.area}</Col>
              <Col style={{ flex: 3 }}>{check.responsible}</Col>
              <Col style={{ maxWidth: "50px" }}>QR</Col>
              <Col style={{ maxWidth: "70px" }}>Check</Col>
            </Row>
          ))}
        </Container>
      }



      <NewCheck checklistId={template.id} />

    </Flex>)
}
