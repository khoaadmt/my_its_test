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
            <div className="top-up-card-container mx-5 lg:mx-[6%]">
                <h1
                    className="p-4 text-center text-5xl font-bold text-[#00a8a2] lg:text-6xl xl:p-8 xl:text-7xl 2xl:text-8xl"
                    style={{ WebkitTextStroke: "2px white  " }}
                >
                    Top up card
                </h1>

                <div className="flex flex-col rounded-[20px] bg-white p-4 md:flex-row lg:p-8">
                    <div className="buy-top-up-card-container box-content lg:w-3/5 lg:pr-8">
                        <h2 className="text-center text-2xl font-bold xl:text-4xl">
                            Buy a top-up card
                        </h2>
                        <h3 className="py-4 text-xl font-bold lg:py-6 xl:text-2xl">
                            Select denomitation
                        </h3>
                        <div className="card-value-container gap-3 lg:gap-5">
                            <div className="card-value py-2 lg:px-8 lg:text-lg">10.000 VND</div>
                            <div className="card-value py-2 lg:px-8 lg:text-lg">20.000 VND</div>
                            <div className="card-value py-2 lg:px-8 lg:text-lg">30.000 VND</div>
                            <div className="card-value py-2 lg:px-8 lg:text-lg">50.000 VND</div>
                            <div className="card-value py-2 lg:px-8 lg:text-lg">100.000 VND</div>
                            <div className="card-value py-2 lg:px-8 lg:text-lg">200.000 VND</div>
                            <div className="card-value py-2 lg:px-8 lg:text-lg">30.000 VND</div>
                            <div className="card-value py-2 lg:px-8 lg:text-lg">500.000 VND</div>
                        </div>

                        <div>
                            <h3 className="py-4 text-xl font-bold lg:py-6 xl:text-2xl">
                                Top-up phone number
                            </h3>
                            <div className="flex flex-row lg:pt-4">
                                <PhoneInput
                                    clasName=""
                                    inputValue={phoneNumber}
                                    label="Entern mobile phone"
                                />
                                <button className="ml-6 w-[50%] rounded-lg border-[0.1rem] border-[#00a8a2] p-0">
                                    Mobile carrier
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="price-details mt-8 flex flex-col lg:w-2/5">
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
