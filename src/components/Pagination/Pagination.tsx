// CustomPagination.tsx
import React, { useState } from "react";
import { Pagination, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./Pagination.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

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
                <Button type="text" onClick={goPrev} className="prev-btn">
                    <FaArrowLeftLong />
                    <span>Previous</span>
                </Button>
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
                />
            </div>

            <div className="pagination-right">
                <Button type="text" onClick={goNext} className="next-btn">
                    <span>Next</span>
                    <FaArrowRightLong />
                </Button>
            </div>
        </div>
    );
}
