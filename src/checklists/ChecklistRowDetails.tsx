import { Col, Container, Row } from 'react-bootstrap';
import { Template } from '../builder/template/template';
import { Flex } from '../common/Flex';
import { Check, NewCheck } from './NewCheck';
import { useGetCheckListByTemplate } from '../api/use-get-check-list-by-template';
import { colors } from '../common/colors';
import { useState } from 'react';
import { CheckInfoModal } from './check/CheckInfoModal';
import { CheckResultModal } from './check/CheckResultModal';

type Props = {
  template: Template;
};

export const ChecklistRowDetails: React.FC<Props> = ({ template }) => {
  const getCheckListByTemplate = useGetCheckListByTemplate(template.id);
  const [showCheckInfo, setShowCheckInfo] = useState<Check>();
  const [showCheckResult, setShowCheckResult] = useState<Check>();

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
            <Row key={check.id} style={{ marginTop: "8px", padding: "8px", backgroundColor: "#fafafa", borderBottom: "1px dotted #ccc" }}>
              <Col style={{ flex: 1 }}>{check.checkAt ? new Date().toLocaleDateString('en-GB').replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$1/$2-$3') : "?"}</Col>
              <Col style={{ flex: 3 }}>{check.area}</Col>
              <Col style={{ flex: 3 }}>{check.responsible}</Col>
              <Col style={{ maxWidth: "70px", display: 'flex', justifyContent: 'center' }}>
                <i className="bi bi-file-earmark-check" onClick={() => {
                  setShowCheckInfo(check);
                }} style={{ fontSize: "18px", WebkitTextStrokeWidth: "0.3px", color: colors.themeDarker, marginRight: "10px", cursor: "pointer" }} />

              </Col>
              <Col style={{ maxWidth: "70px", display: 'flex', justifyContent: 'center' }}>
                <i className="bi bi-clipboard-pulse" onClick={() => {
                  setShowCheckResult(check);
                }} style={{ fontSize: "18px", WebkitTextStrokeWidth: "0.3px", color: colors.themeDarker, marginRight: "10px", cursor: "pointer" }} />
              </Col>
            </Row>
          ))}
          <CheckInfoModal check={showCheckInfo} show={!!showCheckInfo} onHide={() => { setShowCheckInfo(undefined) }} />
          <CheckResultModal checklist={template} check={showCheckResult} show={!!showCheckResult} onHide={() => { setShowCheckResult(undefined) }} />
        </Container>
      }

      <Flex fullWidth horizontalReverse paddingRight8 paddingTop8>
        <NewCheck checklistId={template.id} />
      </Flex>

    </Flex>)
}
