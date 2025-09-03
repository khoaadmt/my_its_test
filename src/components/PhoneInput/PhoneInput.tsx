import React, { useState } from "react";
import "./PhoneInput.css";
import { Input } from "antd";

type PhoneInputProps = {
    inputValue: string;
    label: React.ReactNode;
    placeholder?: string;
    className?: string;
    handleInputOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const PhoneInput: React.FC<PhoneInputProps> = ({
    inputValue,
    label,
    placeholder,
    className,
    handleInputOnChange,
}) => {
    const [isInvalid, setIsInvalid] = useState(false);

    const isValidLength = inputValue.replace(/\D/g, "").length === 10;

    return (
        <div className={`phone-input-container ${className || ""}`}>
            <label>{label}</label>
            <Input
                maxLength={14}
                value={inputValue}
                onChange={handleInputOnChange}
                placeholder={placeholder}
            />
            {isInvalid && <small className="error-message">Incorrect number</small>}
        </div>
    );
};

export default PhoneInput;
