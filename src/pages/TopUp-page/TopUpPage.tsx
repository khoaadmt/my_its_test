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
            <div className="top-up-card-container">
                <h1
                    className="p-8 text-center text-6xl font-bold text-[#00a8a2] xl:text-8xl"
                    style={{ WebkitTextStroke: "2px white" }}
                >
                    Top up card
                </h1>

                <div className="flex flex-row rounded-[20px] bg-white p-8">
                    <div className="buy-top-up-card-container box-content pr-8">
                        <h2 className="pb-8 text-center text-4xl font-bold">Buy a top-up card</h2>
                        <h3 className="text-2xl font-bold">Select denomitation</h3>
                        <div className="card-value-container pb-7 pt-7">
                            <div className="card-value text-lg">10.000 VND</div>
                            <div className="card-value text-lg">20.000 VND</div>
                            <div className="card-value text-lg">30.000 VND</div>
                            <div className="card-value text-lg">50.000 VND</div>
                            <div className="card-value text-lg">100.000 VND</div>
                            <div className="card-value text-lg">200.000 VND</div>
                            <div className="card-value text-lg">30.000 VND</div>
                            <div className="card-value text-lg">500.000 VND</div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold">Top-up phone number</h3>
                            <div className="flex flex-row pt-8">
                                <PhoneInput
                                    clasName="basis-[50%]"
                                    inputValue={phoneNumber}
                                    label="Entern mobile phone"
                                />
                                <button className="ml-6 basis-[25%] rounded-lg border-[0.1rem] border-[#00a8a2]">
                                    Mobile carrier
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="price-details flex flex-col">
                        <div className="m-7 rounded-lg border border-[#667085] p-3">
                            <div className="flex flex-row items-center gap-2 px-3 py-4">
                                <FaSimCard className="h-12 w-12 text-[#00a8a2]" />
                                <div>
                                    <p>Number</p>
                                    <p className="font-bold">0366 516 834</p>
                                </div>
                            </div>

                            <div className="flex flex-row gap-2 px-3 py-2">
                                <div>
                                    <FaWifi className="h-12 w-12 text-[#00a8a2]" />
                                </div>
                                <div>
                                    <p>Network provider</p>
                                    <p className="font-bold">ITS</p>
                                </div>
                            </div>
                        </div>
                        <div className="m-7 flex flex-col justify-between gap-4">
                            <h3 className="text-2xl font-bold">Price details</h3>
                            <div className="basi-[30%] flex h-full flex-col justify-between">
                                <div className="flex flex-row justify-between py-2">
                                    <p>Demomiation</p>
                                    <p className="font-bold">100.000 VND</p>
                                </div>
                                <div className="flex flex-row justify-between py-2">
                                    <p>Discount 1%</p>
                                    <p className="font-bold">9.500 VND</p>
                                </div>
                                <div className="flex flex-row justify-between py-2">
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
