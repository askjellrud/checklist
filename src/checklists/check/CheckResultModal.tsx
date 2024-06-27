import { Button, Modal } from 'react-bootstrap';
import { Checklist } from '../../checklist/Checklist';
import { Template } from '../../builder/template/template';
import { Check } from '../NewCheck';

type Props = {
  show: boolean,
  onHide: () => void,
  checklist: Template | undefined,
  check: Check | undefined;
};

export const CheckResultModal = ({ show, onHide, checklist, check }: Props) => {

  if (!check || !checklist) {
    return null;
  }

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Check Results</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Checklist
          mode='result'
          template={checklist}
          check={check}
          checkChanged={() => { }}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => onHide()}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal >
  )
}
