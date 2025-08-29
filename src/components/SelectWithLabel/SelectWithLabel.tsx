import React, { useState } from "react";
import "./SelectWithLabel.css";
import { Select } from "antd";
import { Option } from "../../Types/common";
type SelectWithLabelProps = {
    label: string;
    placeholder?: string;
    className?: string;
    options: Option[];
};

const SelectWithLabel: React.FC<SelectWithLabelProps> = ({
    label,
    placeholder,
    options,
    className,
}) => {
    return (
        <>
            <div className="select-field h-full w-full">
                <Select
                    id="transaction-point"
                    showSearch
                    placeholder={placeholder}
                    filterOption={(input, option) =>
                        (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
                    }
                    options={options}
                    suffixIcon={null}
                    className="h-full w-full"
                />
                <label htmlFor="transaction-point" className="select-label font-bold">
                    {label}
                </label>
            </div>
        </>
    );
};

export default SelectWithLabel;
