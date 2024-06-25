import { Button, Modal } from 'react-bootstrap';
import { Checklist } from '../checklist/Checklist';
import { Template } from '../builder/template/template';
import { useEffect, useState } from 'react';
import { Check, newCheck } from './NewCheck';

type Props = {
  show: boolean,
  onHide: () => void,
  checklist: Template
};

export const ChecklistResultModal = ({ show, onHide, checklist }: Props) => {
  const [check, setCheck] = useState<Check>(newCheck()); // TODO from endpoint

  useEffect(() => {
    setCheck(newCheck())
  }, [checklist])

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Results</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Checklist
          mode='result'
          template={checklist}
          check={check}
          checkChanged={(newCheck) => setCheck(newCheck)}
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
