import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import "./SubmitButton.css";
interface SubmitButtonProps {
    onClick: () => void;
    disabled?: boolean;
    children: React.ReactNode;
    className?: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick, disabled = false, children, className = "" }) => {
    return (
        <button className={`btn-custom-submit ${className}`} onClick={onClick} disabled={disabled}>
            {children} <ArrowRightOutlined />
        </button>
    );
};

export default SubmitButton;
