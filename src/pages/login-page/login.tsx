import { Input } from "antd";
import "./login.css";
import { useState } from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import PhoneInput from "../../components/PhoneInput/PhoneInput";
import SubmitButton from "../../components/SubmitButton/SubmitButton";

export default function Login() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [isInvalid, setIsInvalid] = useState(false);

    const formatPhone = (input: string) => {
        const digits = input.replace(/\D/g, "");

        if (digits.length <= 4) return digits;
        if (digits.length <= 7) {
            return digits.slice(0, 4) + " " + digits.slice(4);
        }
        if (digits.length <= 10) {
            return digits.slice(0, 4) + " " + digits.slice(4, 7) + " " + digits.slice(7);
        }

        let formatted = digits.slice(0, 4) + " " + digits.slice(4, 8) + " " + digits.slice(8, 11);
        return formatted;
    };

    const handleInputPhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(formatPhone(e.target.value));
    };

    const handleBtnSentToOTPClick = () => {
        const digits = phoneNumber.replace(/\D/g, "");
        if (digits.length < 10) {
            setIsInvalid(true);
        } else {
            setIsInvalid(false);
            console.log("Send OTP to:", digits);
        }
    };
    const isValidLength = phoneNumber.replace(/\D/g, "").length >= 10;

    return (
        <>
            <div className="login-form-container">
                <h2>Login</h2>
                <p>You need to login to be able to top up your card</p>
                <PhoneInput
                    inputValue={phoneNumber}
                    label="Phone number"
                    handleInputOnChange={handleInputPhoneNumberChange}
                />

                <SubmitButton onClick={handleBtnSentToOTPClick} disabled={!isValidLength} children={"Sent to OTP"} />
            </div>
        </>
    );
}
