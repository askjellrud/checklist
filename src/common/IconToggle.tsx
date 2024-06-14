import React from "react";

interface CustomToggleProps {
    onClick: React.MouseEventHandler<HTMLSpanElement>;
    children: React.ReactNode;
}

export const IconToggle = React.forwardRef<HTMLSpanElement, CustomToggleProps>(({ onClick, children }, ref) => (
    <span
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
        style={{ cursor: 'pointer' }}
    >
        {children}
    </span>
));