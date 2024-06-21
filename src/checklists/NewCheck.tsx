import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import styles from '../App.module.scss'
import { Flex } from '../common/Flex';
import { randomId } from '../common/string';
import { colors } from '../common/colors';

export type Check = {
    id: string;
    checklistId: string;
    area: string;
    responsible: string;
}

interface ConfirmButtonProps {
    checklistId: string;
}

export const NewCheck: React.FC<ConfirmButtonProps> = ({ checklistId }) => {
    const [showModal, setShowModal] = useState(false);
    const [area, setArea] = useState('');
    const [responsible, setResponsible] = useState('');


    const onCreate = () => {
        const check: Check = {
            id: randomId(),
            checklistId,
            area,
            responsible
        }
        console.log('Create check...', check);
        setShowModal(false);
    };

    return (
        <>
            <Flex horizontalReverse style={{ color: colors.themeDarker, fontSize: "16px" }} fullWidth onClick={() => setShowModal(true)}>
                new check
                <i className="bi bi-plus" style={{ fontSize: "18px", WebkitTextStrokeWidth: "1px", color: colors.themeDarker, cursor: "pointer" }} />
            </Flex>


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
                            value={responsible}
                            onChange={(event) => setResponsible(event.target.value)}
                        />

                    </Flex>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cancel
                    </Button>
                    <Button className={styles['app-btn']} onClick={() => onCreate()}>
                        Create
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
