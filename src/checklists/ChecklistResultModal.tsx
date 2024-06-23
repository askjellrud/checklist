import { Button, Modal } from 'react-bootstrap';
import { Checklist } from '../checklist/Checklist';
import { Template } from '../builder/template/template';

type Props = {
  show: boolean,
  onHide: () => void,
  checklist: Template
};

export const ChecklistResultModal = ({ show, onHide, checklist }: Props) => {

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Resullt</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Checklist template={checklist} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => onHide()}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal >
  )
}
