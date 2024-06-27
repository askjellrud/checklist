import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import styles from '../App.module.scss'
import { Flex } from '../common/Flex';
import { randomId } from '../common/string';
import { colors } from '../common/colors';
import { useCreateCheck } from '../api/use-create-check';
import { useQueryClient } from '@tanstack/react-query';
import { queryKeysChecks } from '../api/query-keys';
import DatePicker from 'react-datepicker';
import { CheckData } from '../builder/template/template';

export type CheckDataMap = {
    [key: string]: CheckData;
}

export type Check = {
    id: string;
    checklistId: string;
    checkAt: number | null;
    area: string;
    responsible: string;
    data: CheckDataMap;
}

export const newCheck = (): Check => {
    return {
        id: randomId(),
        area: "",
        checkAt: null,
        checklistId: "",
        responsible: "",
        data: {}
    };
}

interface ConfirmButtonProps {
    checklistId: string;
}

export const NewCheck: React.FC<ConfirmButtonProps> = ({ checklistId }) => {
    const [showModal, setShowModal] = useState(false);
    const [area, setArea] = useState('');
    const [responsible, setResponsible] = useState('');
    const [checkAt, setCheckAt] = useState<number | null>(Date.now());
    const createCheck = useCreateCheck();
    const queryClient = useQueryClient();


    const onCreate = () => {
        const check: Check = newCheck();
        check.area = area;
        check.checkAt = checkAt;
        check.checklistId = checklistId;
        check.responsible = responsible;
        createCheck.mutate(check, {
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: queryKeysChecks.listByChecklist(checklistId) });
            }
        })
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
                            Date
                        </Flex>
                        <Flex fullWidth>
                            <DatePicker
                                selected={checkAt ? new Date(checkAt) : null}
                                onChange={(date) => {
                                    const newDate = date?.getTime() || null;
                                    console.log(newDate);
                                    setCheckAt(newDate);
                                }}
                                className="form-control"
                                dateFormat="dd/MM-yyyy"
                            />
                        </Flex>
                    </Flex>

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
            </Modal >
        </>
    );
};
