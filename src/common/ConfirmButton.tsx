import React, { useState } from 'react';
import { Button, Modal, ButtonProps } from 'react-bootstrap';

interface ConfirmButtonProps {
    children: React.ReactNode;
    onConfirm: () => void;
    buttonProps?: ButtonProps;
    text: string;
}

const ConfirmButton: React.FC<ConfirmButtonProps> = ({
    children,
    onConfirm,
    buttonProps,
    text
}) => {
    const [showConfirm, setShowConfirm] = useState(false);

    const handleConfirm = () => {
        onConfirm();
        setShowConfirm(false); // Close the modal after confirming
    };

    return (
        <>
            <Button {...buttonProps} onClick={() => setShowConfirm(true)}>
                {children}
            </Button>

            <Modal show={showConfirm} onHide={() => setShowConfirm(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm</Modal.Title>
                </Modal.Header>
                <Modal.Body>{text}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowConfirm(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleConfirm}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ConfirmButton;
