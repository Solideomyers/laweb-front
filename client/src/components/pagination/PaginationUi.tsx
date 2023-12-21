"use client";
import { useState } from "react";
import { Pagination } from "keep-react";

interface PaginationUiProps {
  currentPage: number;
  onPageChange: (page: number) => void;
  totalPages: number;
}

export const PaginationUi: React.FC<PaginationUiProps> = ({
  totalPages,
  onPageChange,
  currentPage,
}) => {
  return (
    <div className="col-span-4 my-4 h-fit grid place-items-center">
      <Pagination
        currentPage={currentPage}
        onPageChange={onPageChange}
        totalPages={totalPages}
        iconWithText={true}
        prevNextShape="circle"
        activeCurrentPageShape="circle"
      />
    </div>
  );
};
