import { FilterOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Dropdown, Select } from "antd";
import { IoFilter } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import "./SelectPackagePage.css";
import PlanPackageCard from "./plan-package-card/PlanPakageCard";
import MyPagination from "./../../components/Pagination/Pagination";

export default function SelectPackagePage() {
    const items = [
        {
            key: "1",
            label: "By price",
        },
        {
            key: "2",
            label: "By price",
        },
        {
            key: "3",
            label: "By price",
        },
    ];
    return (
        <div className="mx-5 lg:mx-[6%] 2xl:mx-[15%]">
            <div className="rounded-[20px] bg-white p-4 md:flex-row lg:p-8 xl:px-12 xl:pb-12">
                <div className="flex flex-col gap-2 md:flex-row">
                    <div className="search-transaction-point w-full">
                        <SearchOutlined className="select-left-icon" />
                        <Select
                            showSearch
                            placeholder="Enter your desired phone number"
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
                    <div className="md:w-45% flex flex-row gap-2 lg:w-[35%]">
                        <div>
                            <Dropdown menu={{ items }} trigger={["click"]} placement="bottomLeft">
                                <Button
                                    className="h-full px-12 py-1 md:px-4 md:py-0"
                                    icon={<IoFilter />}
                                >
                                    Filters
                                </Button>
                            </Dropdown>
                        </div>
                        <div className="flex flex-1 flex-row gap-2">
                            <Button className="h-full w-1/2" icon={<FaArrowLeft />}>
                                Back
                            </Button>

                            <Button className="h-full w-1/2" icon={<FaArrowRight />}>
                                Confirm
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="flex w-full flex-row flex-wrap justify-between">
                    <PlanPackageCard
                        className={"mt-6"}
                        title="INT69 Plan - 5GB"
                        price="69.000 VND/month"
                    />
                    <PlanPackageCard
                        className={"mt-6"}
                        title="INT69 Plan - 5GB"
                        price="69.000 VND/month"
                    />
                    <PlanPackageCard
                        className={"mt-6"}
                        title="INT69 Plan - 5GB"
                        price="69.000 VND/month"
                    />
                    <PlanPackageCard
                        className={"mt-6"}
                        title="INT69 Plan - 5GB"
                        price="69.000 VND/month"
                    />
                    <PlanPackageCard
                        className={"mt-6"}
                        title="INT69 Plan - 5GB"
                        price="69.000 VND/month"
                    />
                    <PlanPackageCard
                        className={"mt-6"}
                        title="INT69 Plan - 5GB"
                        price="69.000 VND/month"
                    />
                </div>
                <div className="mt-6">
                    <MyPagination />
                </div>
            </div>
        </div>
    );
}
