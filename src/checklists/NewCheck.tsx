import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import styles from '../App.module.scss'
import { Flex } from '../common/Flex';

interface ConfirmButtonProps {
    onCreated: () => void;
}

export const NewCheck: React.FC<ConfirmButtonProps> = ({ onCreated }) => {
    const [showModal, setShowModal] = useState(false);
    const [area, setArea] = useState('');
    const [responsible, setResponsible] = useState('');


    const handleConfirm = () => {
        setShowModal(false); // Close the modal after confirming
        onCreated();
    };

    return (
        <>
            <Button className={styles['app-btn']} onClick={() => setShowModal(true)}>
                New check
            </Button>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>New check</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Flex padding16 fullWidth>
                        <Flex rightAlign paddingRight16 style={{ width: "30%" }}>
                            Area
                        </Flex>
                        <Form.Control
                            type="text"
                            placeholder=""
                            value={area}
                            onChange={(event) => setArea(event.target.value)}
                        />

                    </Flex>

                    <Flex padding16 fullWidth>
                        <Flex rightAlign paddingRight16 style={{ width: "30%" }}>
                            Responsibe
                        </Flex>
                        <Form.Control
                            type="text"
                            placeholder=""
                            value={area}
                            onChange={(event) => setArea(event.target.value)}
                        />

                    </Flex>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cancel
                    </Button>
                    <Button className={styles['app-btn']} onClick={handleConfirm}>
                        Create
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
