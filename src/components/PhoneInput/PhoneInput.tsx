import React, { useState } from "react";
import "./PhoneInput.css";
import { Input } from "antd";

type PhoneInputProps = {
    inputValue: string;
    label: string;
    placeholder?: string;
    clasName?: string;
    handleInputOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const PhoneInput: React.FC<PhoneInputProps> = ({ inputValue, label, placeholder, clasName, handleInputOnChange }) => {
    const [isInvalid, setIsInvalid] = useState(false);

    const isValidLength = inputValue.replace(/\D/g, "").length === 10;

    return (
        <div className="phone-input-container">
            <label>{label}</label>
            <Input
                className={clasName}
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
