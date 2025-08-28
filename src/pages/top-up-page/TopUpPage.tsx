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
            <div className="top-up-card-container mx-5 lg:mx-[6%] xl:mx-[15%]">
                <h1
                    className="p-4 text-center text-5xl font-bold text-[#00a8a2] lg:text-6xl xl:p-8 xl:text-7xl 2xl:text-8xl"
                    style={{ WebkitTextStroke: "2px white  " }}
                >
                    Top up card
                </h1>

                <div className="flex flex-col rounded-[20px] bg-white p-4 md:flex-row lg:p-8 xl:px-12 xl:pb-12">
                    <div className="buy-top-up-card-container box-content md:w-3/5 md:pr-4 lg:pr-8 xl:pr-10">
                        <h2 className="text-center text-2xl font-bold xl:text-4xl">
                            Buy a top-up card
                        </h2>
                        <h3 className="py-4 text-xl font-bold lg:py-6 xl:text-2xl">
                            Select denomitation
                        </h3>
                        <div className="card-value-container gap-3 lg:gap-5">
                            <div className="card-value py-1 lg:px-8 lg:text-lg">10.000 VND</div>
                            <div className="card-value py-1 lg:px-8 lg:text-lg">20.000 VND</div>
                            <div className="card-value py-1 lg:px-8 lg:text-lg">30.000 VND</div>
                            <div className="card-value py-1 lg:px-8 lg:text-lg">50.000 VND</div>
                            <div className="card-value py-1 lg:px-8 lg:text-lg">100.000 VND</div>
                            <div className="card-value py-1 lg:px-8 lg:text-lg">200.000 VND</div>
                            <div className="card-value py-1 lg:px-8 lg:text-lg">30.000 VND</div>
                            <div className="card-value py-1 lg:px-8 lg:text-lg">500.000 VND</div>
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
                    <div className="price-details mt-4 flex flex-col md:mt-0 md:w-2/5">
                        <div className="m-4 rounded-lg border border-[#667085] lg:m-7 lg:p-3">
                            <div className="flex flex-row items-stretch gap-2 px-3 py-2">
                                <div>
                                    <FaSimCard className="h-10 w-10 text-[#00a8a2] lg:h-10 lg:w-10 xl:h-12 xl:w-12" />
                                </div>
                                <div className="flex flex-col justify-between">
                                    <p>Number</p>
                                    <p className="font-bold">036 651 6834</p>
                                </div>
                            </div>

                            <div className="flex flex-row items-stretch gap-2 px-3 py-2">
                                <div>
                                    <FaWifi className="h-9 w-9 text-[#00a8a2] lg:h-10 lg:w-10 xl:h-11 xl:w-11" />
                                </div>
                                <div className="flex flex-col justify-between">
                                    <p>Network provider</p>
                                    <p className="font-bold">ITS</p>
                                </div>
                            </div>
                        </div>
                        <div className="mx-4 mb-4 flex flex-col gap-2 lg:mx-6 lg:mb-6">
                            <h3 className="text-xl font-bold lg:text-2xl">Price details</h3>
                            <div className="basi-[30%] flex h-full flex-col justify-between">
                                <div className="flex flex-row justify-between py-1 lg:py-2">
                                    <p>Demomiation</p>
                                    <p className="font-bold">100.000 VND</p>
                                </div>
                                <div className="flex flex-row justify-between py-1 lg:py-2">
                                    <p>Discount 1%</p>
                                    <p className="font-bold">9.500 VND</p>
                                </div>
                                <div className="flex flex-row justify-between py-1 lg:py-2">
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
