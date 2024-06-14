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
        style={{ cursor: 'pointer', fontSize: "20px", WebkitTextStrokeWidth: "1px", color: "#777" }}
    >
        <i className="bi bi-list"></i>
    </span>
));