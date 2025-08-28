import { FaSimCard, FaWifi } from "react-icons/fa6";
import PhoneInput from "../../components/PhoneInput/PhoneInput";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { TfiReload } from "react-icons/tfi";
import "./PayStandardSimPage.css";
import { Segmented } from "antd";

export const PayStandardSimPage: React.FC = () => {
    return (
        <div className="top-up-card-container mx-5 lg:mx-[6%] xl:mx-[15%]">
            <div className="flex flex-col rounded-[20px] bg-white p-4 md:flex-row lg:p-8 xl:px-12 xl:pb-12">
                <div className="buy-top-up-card-container box-content md:w-3/5 md:pr-4 lg:pr-8 xl:pr-10">
                    <h3 className="py-4 text-center text-xl font-bold lg:py-6 xl:text-2xl">
                        Confirm and pay
                    </h3>
                    <div className="sim-toggle-wrapper w-full">
                        <Segmented
                            options={["Standard SIM", "E SIM"]}
                            onChange={(value) => {
                                console.log(value); // string
                            }}
                            className="sim-segmented w-fu"
                        />
                    </div>
                    <p className="py-4 text-lg font-bold">Recipient information</p>
                    <div className="">
                        <PhoneInput
                            className="py-2"
                            inputValue=""
                            label="Recipient name"
                            placeholder="Enter your first and last name"
                        ></PhoneInput>
                        <PhoneInput
                            className="py-2"
                            inputValue=""
                            label="Recipient name"
                            placeholder="Enter your first and last name"
                        ></PhoneInput>
                        <PhoneInput
                            className="py-2"
                            inputValue=""
                            label="Recipient name"
                            placeholder="Enter your first and last name"
                        ></PhoneInput>
                    </div>
                </div>
                <div className="price-details border-primary mt-4 flex flex-col md:mt-0 md:w-2/5">
                    <div className="border-primary m-4 rounded-lg border lg:m-7 lg:p-3">
                        <div className="flex flex-row items-center justify-between">
                            <div className="flex flex-row items-stretch gap-2 px-3 py-2">
                                <div>
                                    <FaSimCard className="h-10 w-10 text-[#00a8a2] lg:h-10 lg:w-10 xl:h-12 xl:w-12" />
                                </div>
                                <div className="flex flex-col justify-between">
                                    <p>Number</p>
                                    <p className="font-bold">036 651 6834</p>
                                </div>
                            </div>
                            <div className="b rounded-md bg-[#00a8a2] p-2">
                                <TfiReload className="h-4 w-4 text-white" />
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-between">
                            <div className="flex flex-row items-stretch gap-2 px-3 py-2">
                                <div>
                                    <FaWifi className="h-9 w-9 text-[#00a8a2] lg:h-10 lg:w-10 xl:h-11 xl:w-11" />
                                </div>
                                <div className="flex flex-col justify-between">
                                    <p>Package</p>
                                    <p className="font-bold">INT69</p>
                                </div>
                            </div>
                            <div className="b rounded-md bg-[#00a8a2] p-2">
                                <TfiReload className="h-4 w-4 text-white" />
                            </div>
                        </div>
                    </div>
                    <div className="mx-4 mb-4 flex flex-col gap-2 lg:mx-6 lg:mb-6">
                        <h3 className="text-xl font-bold lg:text-2xl">Price details</h3>
                        <div className="basi-[30%] flex h-full flex-col justify-between">
                            <div className="flex flex-row justify-between p-2 lg:py-2">
                                <p>Number of subscribers</p>
                                <p className="font-bold">100.000 VND</p>
                            </div>
                            <div className="flex flex-row justify-between p-2 lg:py-2">
                                <p>Package</p>
                                <p className="font-bold">9.500 VND</p>
                            </div>
                            <div className="flex flex-row justify-between p-2 lg:py-2">
                                <p>Network adapter</p>
                                <p className="font-bold">91.500 VND</p>
                            </div>
                            <div className="flex flex-row justify-between rounded-md bg-[#f2f4f7] p-2 lg:py-2">
                                <p className="font-bold">Total</p>
                                <p className="font-bold">250.000 VND</p>
                            </div>
                        </div>
                        <SubmitButton children="Pay" />
                    </div>
                </div>
            </div>
        </div>
    );
};
