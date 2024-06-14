import React from "react";

interface CustomToggleProps {
    onClick: React.MouseEventHandler<HTMLSpanElement>;
    children: React.ReactNode;
}

export const IconToggle = React.forwardRef<HTMLSpanElement, CustomToggleProps>(({ onClick }, ref) => (
    <span
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
        style={{ cursor: 'pointer' }}
    >
        <i className="bi bi-airplane-engines-fill"></i>
    </span>
));