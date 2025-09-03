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
                " border-primary relative w-[48%] cursor-pointer rounded-2xl bg-white shadow-md md:w-[32%]"
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
                    className="my-10 h-[5rem] object-contain md:h-[7rem] lg:h-[12rem] lg:w-[12rem] xl:my-14"
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
