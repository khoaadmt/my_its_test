// CustomPagination.tsx
import React, { useState } from "react";
import { Pagination, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./Pagination.css";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

export default function MyPagination() {
    const [page, setPage] = useState<number>(1);
    const totalItems = 800;
    const pageSize = 10;

    const onChange = (p: number) => {
        setPage(p);
    };

    const goPrev = () => {
        if (page > 1) setPage((s) => s - 1);
    };

    const goNext = () => {
        const maxPage = Math.ceil(totalItems / pageSize);
        if (page < maxPage) setPage((s) => s + 1);
    };

    return (
        <div className="custom-pagination-wrapper">
            <div className="pagination-left">
                <button onClick={goPrev} className="prev-btn">
                    <LuArrowLeft className="mr-1 h-5 w-5" />
                    <span className="prev-btn-content">Previous</span>
                </button>
            </div>

            <div className="pagination-center">
                <Pagination
                    current={page}
                    total={totalItems}
                    pageSize={pageSize}
                    onChange={onChange}
                    showSizeChanger={false}
                    showQuickJumper={false}
                    className="antd-custom-pagination"
                    responsive={true}
                />
            </div>

            <div className="pagination-right">
                <button onClick={goNext} className="next-btn">
                    <span className="next-btn-content">Next</span>
                    <LuArrowRight className="ml-1 h-5 w-5" />
                </button>
            </div>
        </div>
    );
}
