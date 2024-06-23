import { Button, Modal } from 'react-bootstrap';

type Props = {
  show: boolean,
  onHide: () => void
};

export const ChecklistInfoModal = ({ show, onHide }: Props) => {

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Check details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Info

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => onHide()}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal >
  )
}
