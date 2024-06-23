import QRCode from 'qrcode.react';
import { Alert, Modal } from 'react-bootstrap';
import { Flex } from '../common/Flex';
import { Check } from './NewCheck';
import { baseUrl } from '../api/urls';
import { useState } from 'react';

type Props = {
  show: boolean,
  onHide: () => void,
  check: Check
};

export const ChecklistInfoModal = ({ show, onHide, check }: Props) => {
  const [showCopied, setShowCopied] = useState(false);

  const url = baseUrl + "?check=" + check.id;

  const onHideInternal = () => {
    setShowCopied(false);
    onHide();
  }

  return (
    <Modal show={show} onHide={onHideInternal}>
      <Modal.Header closeButton>
        <Modal.Title>Check</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Flex vertical center gap32 padding32>
          <Flex paddingTop8 paddingBottom16>
            Scan or send this code to start the check
          </Flex>
          <Flex onClick={() => {
            navigator.clipboard.writeText(url).then(() => {
              setShowCopied(true);
            });
          }} paddingTop16 paddingBottom16>
            <QRCode value={url} />
          </Flex>
          {showCopied &&
            <Flex paddingTop8 paddingBottom16>
              <Alert>
                Url is copied to the clipbard
              </Alert>
            </Flex>}
        </Flex>
      </Modal.Body>

    </Modal >
  )
}
