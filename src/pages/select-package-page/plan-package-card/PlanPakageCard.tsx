import React from "react";
import pattern_1 from "../../../assets/Pattern_1.png";
import icon_5g from "../../../assets/Layer_5g.png";
type PlanPackageCardProps = {
    title: string;
    price: string;
    className?: string;
};
const PlanPackageCard: React.FC<PlanPackageCardProps> = ({ title, price, className }) => {
    return (
        <div
            className={
                className +
                " border-primary relative w-[32%] cursor-pointer rounded-2xl bg-white shadow-md"
            }
        >
            <img
                src={pattern_1}
                alt="pattern"
                className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="relative flex flex-col items-center">
                <img
                    src={icon_5g}
                    alt="icon"
                    className="my-14 h-[12rem] w-[12rem] object-contain"
                />
                <div className="w-full rounded-2xl bg-[#f2f4f7] px-6 py-2 pt-4">
                    <p className="font-bold text-teal-600">{title}</p>
                    <p className="text-sm text-gray-600">{price}</p>
                </div>
            </div>
        </div>
    );
};
export default PlanPackageCard;
