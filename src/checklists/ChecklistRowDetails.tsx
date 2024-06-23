import { Col, Container, Row } from 'react-bootstrap';
import { Template } from '../builder/template/template';
import { Flex } from '../common/Flex';
import { NewCheck } from './NewCheck';
import { useGetCheckListByTemplate } from '../api/use-get-check-list-by-template';
import { colors } from '../common/colors';
import { useState } from 'react';
import { ChecklistInfoModal } from './ChecklistInfoModal';
import { ChecklistResultModal } from './ChecklistResultModal';

type Props = {
  template: Template;
};

export const ChecklistRowDetails: React.FC<Props> = ({ template }) => {
  const getCheckListByTemplate = useGetCheckListByTemplate(template.id);
  const [showChecklistInfo, setShowChecklistInfo] = useState(false);
  const [showChecklistResult, setShowChecklistResult] = useState(false);

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
            <Col style={{ maxWidth: '70px' }}>Check</Col>
            <Col style={{ maxWidth: '70px' }}>Result</Col>
          </Row>
          {data.map((check) => (
            <Row style={{ marginTop: "8px", padding: "8px", backgroundColor: "#fafafa", borderBottom: "1px dotted #ccc" }}>
              <Col style={{ flex: 1 }}>{check.checkAt ? new Date().toLocaleDateString('en-GB').replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$1/$2-$3') : "?"}</Col>
              <Col style={{ flex: 3 }}>{check.area}</Col>
              <Col style={{ flex: 3 }}>{check.responsible}</Col>
              <Col style={{ maxWidth: "70px", display: 'flex', justifyContent: 'center' }}>
                <i className="bi bi-file-earmark-check" onClick={() => {
                  setShowChecklistInfo(true);
                }} style={{ fontSize: "18px", WebkitTextStrokeWidth: "0.3px", color: colors.themeDarker, marginRight: "10px", cursor: "pointer" }} />
                <ChecklistInfoModal show={showChecklistInfo} onHide={() => { setShowChecklistInfo(false) }} />
              </Col>
              <Col style={{ maxWidth: "70px", display: 'flex', justifyContent: 'center' }}>
                <i className="bi bi-clipboard-pulse" onClick={() => {
                  setShowChecklistResult(true);
                }} style={{ fontSize: "18px", WebkitTextStrokeWidth: "0.3px", color: colors.themeDarker, marginRight: "10px", cursor: "pointer" }} />
                <ChecklistResultModal show={showChecklistResult} onHide={() => { setShowChecklistResult(false) }} />
              </Col>
            </Row>
          ))}
        </Container>
      }


      <Flex fullWidth horizontalReverse paddingRight8>
        <NewCheck checklistId={template.id} />
      </Flex>

    </Flex>)
}
