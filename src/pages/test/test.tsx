import React, { useState } from "react";
import { FaSimCard, FaWifi } from "react-icons/fa";
import PhoneInput from "../../components/PhoneInput/PhoneInput";
import SubmitButton from "../../components/SubmitButton/SubmitButton";

export default function TopUpCard() {
    const denominations = [10000, 20000, 30000, 50000, 100000, 200000, 300000, 500000];

    const [selectedDenom, setSelectedDenom] = useState(100000);
    const [phone, setPhone] = useState("");
    const [network, setNetwork] = useState("ITS");
    const discountRate = 0.01; // 1%

    const formatVND = (amount: any) => new Intl.NumberFormat("vi-VN").format(amount) + " VND";

    const discountValue = Math.round(selectedDenom * discountRate);
    const total = selectedDenom - discountValue;

    return (
        <div className="top-up-card-container mx-auto max-w-6xl p-6">
            <div className="flex flex-col rounded-md bg-white p-4 text-center hover:bg-gray-50 md:flex-row"></div>
            <h1
                className="top-up-card__title p-8 text-center text-6xl font-bold text-[#00a8a2]"
                style={{ WebkitTextStroke: "2px white" }}
            >
                Top up card
            </h1>

            <div className="top-up-card__inner flex flex-col gap-6 rounded-[20px] bg-white p-8 md:flex-row">
                {/* Buy pane */}
                <div className="top-up-card__buy box-content flex-1 pr-2">
                    <h2 className="pb-8 text-center text-4xl font-bold">Buy a top-up card</h2>

                    <h3 className="text-2xl font-bold">Select denomination</h3>

                    <div className="card-value-container grid grid-cols-2 gap-3 pb-7 pt-7 md:grid-cols-4">
                        {denominations.map((d) => (
                            <button
                                key={d}
                                type="button"
                                onClick={() => setSelectedDenom(d)}
                                className={`card-value cursor-pointer rounded-lg border p-4 text-center font-medium shadow-sm ${selectedDenom === d ? "bg-[#ecfffd] ring-2 ring-[#00a8a2]" : "hover:bg-gray-50"}`}
                                aria-pressed={selectedDenom === d}
                            >
                                {formatVND(d)}
                            </button>
                        ))}
                    </div>

                    <div className="pt-4">
                        <h3 className="text-2xl font-bold">Top-up phone number</h3>
                        <div className="flex flex-col gap-4 pt-4 md:flex-row">
                            <div className="basis-1/2">
                                <PhoneInput
                                    className="basis-[50%]"
                                    inputValue={phone}
                                    label="Entern mobile phone"
                                />
                            </div>
                            <div className="basis-1/4 md:basis-1/6">
                                <select
                                    value={network}
                                    onChange={(e) => setNetwork(e.target.value)}
                                    className="w-full rounded-lg border p-3"
                                    aria-label="mobile carrier"
                                >
                                    <option>ITS</option>
                                    <option>Viettel</option>
                                    <option>VinaPhone</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Price details pane */}
                <aside className="top-up-card__price flex w-full flex-col md:w-96">
                    <div className="m-2 rounded-lg border border-[#667085] bg-white p-3">
                        <div className="flex items-center gap-3 px-3 py-4">
                            <FaSimCard className="h-12 w-12 text-[#00a8a2]" />
                            <div>
                                <p className="text-sm text-gray-500">Number</p>
                                <p className="font-bold">{phone || "0366 516 834"}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 px-3 py-2">
                            <FaWifi className="h-12 w-12 text-[#00a8a2]" />
                            <div>
                                <p className="text-sm text-gray-500">Network provider</p>
                                <p className="font-bold">{network}</p>
                            </div>
                        </div>
                    </div>

                    <div className="m-2 flex flex-col justify-between gap-4">
                        <h3 className="text-2xl font-bold">Price details</h3>

                        <div className="flex flex-col rounded-lg border bg-white p-4">
                            <div className="flex justify-between py-2">
                                <p>Denomination</p>
                                <p className="font-bold">{formatVND(selectedDenom)}</p>
                            </div>

                            <div className="flex justify-between py-2">
                                <p>Discount ({Math.round(discountRate * 100)}%)</p>
                                <p className="font-bold">-{formatVND(discountValue)}</p>
                            </div>

                            <div className="mt-2 flex justify-between border-t py-2 pt-2">
                                <p>Total</p>
                                <p className="font-bold">{formatVND(total)}</p>
                            </div>
                        </div>

                        <div>
                            <SubmitButton
                                onClick={() =>
                                    alert(`Pay ${formatVND(total)} for ${phone || "0366516834"}`)
                                }
                            >
                                Pay
                            </SubmitButton>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}
