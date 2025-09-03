import { FaAsterisk, FaSimCard, FaWifi } from "react-icons/fa6";
import PhoneInput from "../../components/PhoneInput/PhoneInput";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { TfiReload } from "react-icons/tfi";
import { Checkbox, Col, GetProp, Radio, Row, Segmented, Select } from "antd";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import SelectWithLabel from "../../components/SelectWithLabel/SelectWithLabel";
import Logo from "../../assets/ITS_logo.png";
import { LuPhoneCall } from "react-icons/lu";
import { GrMapLocation } from "react-icons/gr";
import { LuCalendarDays } from "react-icons/lu";

import "./CheckoutPage.css";
import { useState } from "react";
const { Search } = Input;

export const CheckoutPage: React.FC = () => {
    const [simType, setSimType] = useState("standard_sim");
    const onChange: GetProp<typeof Checkbox.Group, "onChange"> = (checkedValues) => {
        console.log("checked = ", checkedValues);
    };
    const onChangeTransactionPoint = (value: string) => {
        console.log(`selected ${value}`);
    };

    const onSearchTransactionPoint = (value: string) => {
        console.log("search:", value);
    };
    const onSimTypeChange = (type: string) => {
        console.log("type :", type);
        setSimType(type);
    };
    const options = [
        { value: "1", label: "Jack" },
        { value: "2", label: "Lucy" },
        { value: "3", label: "Tom" },
    ];
    const simTypeOptions = [
        { value: "standard_sim", label: "Standard SIM" },
        { value: "e_sim", label: "E SIM" },
    ];
    return (
        <div className="top-up-card-container mx-5 lg:mx-[6%] 2xl:mx-[15%]">
            <div className="flex flex-col rounded-[20px] bg-white p-4 md:flex-row md:items-start lg:p-8 xl:px-12 xl:pb-12">
                <div className="box-content md:w-[55%] md:pr-4 lg:w-3/5 lg:pr-8 xl:pr-10">
                    <h3 className="py-4 text-center text-2xl font-bold lg:py-6 xl:text-3xl">
                        Confirm and pay
                    </h3>
                    <div className="sim-toggle-wrapper w-full">
                        <Segmented
                            options={simTypeOptions}
                            onChange={(value) => {
                                onSimTypeChange(value);
                            }}
                            className="sim-segmented w-fu"
                        />
                    </div>
                    <p className="py-4 text-xl font-bold xl:text-2xl">Recipient information</p>
                    <div className="">
                        <PhoneInput
                            className="py-2"
                            inputValue=""
                            label={
                                <>
                                    <>
                                        <span>
                                            <span>Recipient name</span>
                                            <FaAsterisk className="relative top-[-4px] ml-1 inline-block w-2 text-red-500" />
                                        </span>
                                    </>
                                </>
                            }
                            placeholder="Enter your first and last name"
                        ></PhoneInput>
                        <PhoneInput
                            className="py-2"
                            inputValue=""
                            label={
                                <>
                                    <>
                                        <span>
                                            <span>Recipient name</span>
                                            <FaAsterisk className="relative top-[-4px] ml-1 inline-block w-2 text-red-500" />
                                        </span>
                                    </>
                                </>
                            }
                            placeholder="Enter your first and last name"
                        ></PhoneInput>
                        <PhoneInput
                            className="py-2"
                            inputValue=""
                            label={
                                <>
                                    <>
                                        <span>
                                            <span>Recipient name</span>
                                            <FaAsterisk className="relative top-[-4px] ml-1 inline-block w-2 text-red-500" />
                                        </span>
                                    </>
                                </>
                            }
                            placeholder="Enter your first and last name"
                        ></PhoneInput>
                    </div>
                    {simType == "standard_sim" && (
                        <div>
                            <p className="py-4 text-xl font-bold xl:text-2xl">How to receive SIM</p>
                            <Checkbox.Group
                                style={{ width: "100%" }}
                                defaultValue={["Apple"]}
                                onChange={onChange}
                                className="receive-checkbox"
                            >
                                <Row>
                                    <Col span={24}>
                                        <Checkbox value="home_delivery">
                                            <p>Home delivery</p>
                                        </Checkbox>
                                    </Col>
                                    <Col span={24} className="pt-2">
                                        <Checkbox value="receive_at_transaction_point">
                                            <p>Receive at transaction point</p>
                                        </Checkbox>
                                    </Col>
                                </Row>
                            </Checkbox.Group>

                            <div className="search-transaction-point w-full py-6">
                                <SearchOutlined className="select-left-icon" />
                                <Select
                                    showSearch
                                    placeholder="Search for transaction point name"
                                    optionFilterProp="label"
                                    onChange={(v) => console.log("change", v)}
                                    onSearch={(v) => console.log("search", v)}
                                    suffixIcon={null}
                                    className="h-12 w-full"
                                    options={[
                                        { value: "jack", label: "Jack" },
                                        { value: "lucy", label: "Lucy" },
                                        { value: "tom", label: "Tom" },
                                    ]}
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <div className="h-12 w-[48%]">
                                    <SelectWithLabel label="Province/City" options={options} />
                                </div>
                                <div className="h-12 w-[48%]">
                                    <SelectWithLabel label="District" options={options} />
                                </div>
                            </div>
                            <div className="mt-6 flex flex-col gap-6">
                                <div className="border-primary flex flex-row justify-between rounded-[32px] p-6">
                                    <div className="flex flex-row gap-6">
                                        <img
                                            className="h-[40px] w-[60px]"
                                            src={Logo}
                                            alt="ITS Logo"
                                        />
                                        <div className="flex flex-col gap-1 text-sm">
                                            <div>
                                                <p className="pb-2 text-lg font-bold xl:text-xl">
                                                    ĐGD ITS Ha Noi
                                                </p>
                                            </div>
                                            <div className="text-tertiary item-center flex flex-row items-center gap-1">
                                                <LuPhoneCall />
                                                <p>0961 793 153</p>
                                            </div>
                                            <div className="text-tertiary item-center flex flex-row items-center gap-1">
                                                <GrMapLocation />
                                                <p>Ha Noi</p>
                                            </div>
                                            <div className="text-tertiary item-center flex flex-row items-center gap-1">
                                                <LuCalendarDays />
                                                <p>0h800 - 18h00</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="border-primary rounded-md px-6 py-2 text-[16px]">
                                            Select
                                        </button>
                                    </div>
                                </div>
                                <div className="border-primary flex flex-row justify-between rounded-[32px] p-6">
                                    <div className="flex flex-row gap-6">
                                        <img
                                            className="h-[40px] w-[60px]"
                                            src={Logo}
                                            alt="ITS Logo"
                                        />
                                        <div className="flex flex-col gap-1 text-sm">
                                            <div>
                                                <p className="pb-2 text-lg font-bold xl:text-xl">
                                                    ĐGD ITS Ha Noi
                                                </p>
                                            </div>
                                            <div className="text-tertiary item-center flex flex-row items-center gap-1">
                                                <LuPhoneCall />
                                                <p>0961 793 153</p>
                                            </div>
                                            <div className="text-tertiary item-center flex flex-row items-center gap-1">
                                                <GrMapLocation />
                                                <p>Ha Noi</p>
                                            </div>
                                            <div className="text-tertiary item-center flex flex-row items-center gap-1">
                                                <LuCalendarDays />
                                                <p>0h800 - 18h00</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="border-primary rounded-md px-6 py-2 text-[16px]">
                                            Select
                                        </button>
                                    </div>
                                </div>
                                <div className="border-primary flex flex-row justify-between rounded-[32px] p-6">
                                    <div className="flex flex-row gap-6">
                                        <img
                                            className="h-[40px] w-[60px]"
                                            src={Logo}
                                            alt="ITS Logo"
                                        />
                                        <div className="flex flex-col gap-1 text-sm">
                                            <div>
                                                <p className="pb-2 text-lg font-bold xl:text-xl">
                                                    ĐGD ITS Ha Noi
                                                </p>
                                            </div>
                                            <div className="text-tertiary item-center flex flex-row items-center gap-1">
                                                <LuPhoneCall />
                                                <p>0961 793 153</p>
                                            </div>
                                            <div className="text-tertiary item-center flex flex-row items-center gap-1">
                                                <GrMapLocation />
                                                <p>Ha Noi</p>
                                            </div>
                                            <div className="text-tertiary item-center flex flex-row items-center gap-1">
                                                <LuCalendarDays />
                                                <p>0h800 - 18h00</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="border-primary rounded-md px-6 py-2 text-[16px]">
                                            Select
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="price-details border-primary mt-4 flex flex-col rounded-2xl md:mt-0 md:w-[45%] lg:w-2/5">
                    <div className="border-primary m-6 rounded-lg border p-4 md:p-4 lg:m-7 lg:p-6">
                        <div className="flex flex-row items-center justify-between">
                            <div className="flex flex-row items-stretch gap-2">
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
                        <div className="flex flex-row items-center justify-between pt-6">
                            <div className="flex flex-row items-stretch gap-2">
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
                    <div className="mx-4 flex flex-col gap-2 lg:mx-6 lg:mb-6">
                        <h3 className="text-xl font-bold xl:text-2xl">Price details</h3>
                        <div className="basi-[30%] flex h-full flex-col justify-between">
                            <div className="mx-1 flex flex-row justify-between py-2 xl:mx-2">
                                <p>Number of subscribers</p>
                                <p className="font-bold">100.000 VND</p>
                            </div>
                            <div className="mx-1 flex flex-row justify-between py-2 xl:mx-2">
                                <p>Package</p>
                                <p className="font-bold">9.500 VND</p>
                            </div>
                            <div className="mx-1 flex flex-row justify-between py-2 xl:mx-2">
                                <p>Network adapter</p>
                                <p className="font-bold">91.500 VND</p>
                            </div>
                            <div className="flex flex-row justify-between rounded-md bg-[#f2f4f7] px-1 py-2 xl:px-2">
                                <p className="font-bold">Total</p>
                                <p className="font-bold">250.000 VND</p>
                            </div>
                        </div>
                        <div className="pt-4">
                            <div className="py-2">
                                <SubmitButton children={<>Pay</>} />
                            </div>
                            <div className="py-2">
                                <SubmitButton children="Cancel" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
