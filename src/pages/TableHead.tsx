import React from "react";

interface TableHeaderProps {
  columns: string[];
}

const TableHeader: React.FC<TableHeaderProps> = ({ columns }) => {
  return (
    <div className="bg-gray-100 border-b border-gray-200">
      <div className="flex flex-row">
        {columns.map((column, index) => (
          <div
            key={index}
            className="flex-1 text-center border-r border-gray-200"
          >
            {column}
            <svg
              className="w-4 h-4 ml-1 cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 9l4-4 4 4m0 6l-4 4-4-4"
              />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableHeader;
