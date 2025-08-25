import { useState } from "react";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import PhoneInput from "../../components/PhoneInput/PhoneInput";
import "./TopUpPage.css";
import { FaSimCard, FaWifi } from "react-icons/fa6";

export const TopUpPage: React.FC = () => {
    const [isDisableBtn, setIsDisableBtn] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState("");
    return (
        <>
            <div className="m-6">
                <h1
                    className="text-6xl font-bold text-center p-8 text-[#00a8a2]"
                    style={{ WebkitTextStroke: "2px white" }}>
                    Top up card
                </h1>

                <div className="top-up-card-container bg-white rounded-[20px] p-8">
                    <div className="buy-top-up-card-container box-content pr-8">
                        <h2 className="text-4xl font-bold text-center pb-8">Buy a top-up card</h2>
                        <h3 className="text-2xl font-bold">Select denomitation</h3>
                        <div className="card-value-container pt-4 pb-4">
                            <div className="card-value ">10.000 VND</div>
                            <div className="card-value ">20.000 VND</div>
                            <div className="card-value ">30.000 VND</div>
                            <div className="card-value ">50.000 VND</div>
                            <div className="card-value ">100.000 VND</div>
                            <div className="card-value ">200.000 VND</div>
                            <div className="card-value ">30.000 VND</div>
                            <div className="card-value ">500.000 VND</div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold">Top-up phone number</h3>
                            <div className="flex flex-row pt-8">
                                <PhoneInput
                                    clasName="basis-[50%]"
                                    inputValue={phoneNumber}
                                    label="Entern mobile phone"
                                />
                                <button className="basis-[25%] ml-6  border-[0.1rem] border-[#00a8a2] rounded-lg">
                                    Mobile carrier
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="price-details">
                        <div className="m-5 p-3 border border-[#667085] rounded-lg">
                            <div className="flex flex-row items-center gap-2 px-3 py-2">
                                <FaSimCard className="text-[#00a8a2] w-8 h-8" />
                                <div>
                                    <p>Number</p>
                                    <p className="font-bold">0366 516 834</p>
                                </div>
                            </div>

                            <div className="flex flex-row gap-2 px-3 py-2">
                                <div>
                                    <FaWifi className="text-[#00a8a2] w-8 h-8" />
                                </div>
                                <div>
                                    <p>Network provider</p>
                                    <p className="font-bold">ITS</p>
                                </div>
                            </div>
                        </div>
                        <div className="m-5 basi-[40%]">
                            <h3 className="text-2xl font-bold">Price details</h3>
                            <div className="flex flex-col justify-around">
                                <div className="flex flex-row justify-between">
                                    <p>Demomiation</p>
                                    <p className="font-bold">100.000 VND</p>
                                </div>
                                <div className="flex flex-row justify-between">
                                    <p>Discount 1%</p>
                                    <p className="font-bold">9.500 VND</p>
                                </div>
                                <div className="flex flex-row justify-between">
                                    <p>Total</p>
                                    <p className="font-bold">91.500 VND</p>
                                </div>
                            </div>
                            <SubmitButton children="Pay" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
