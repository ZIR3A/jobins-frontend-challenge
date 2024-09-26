import PropTypes from "prop-types";
import React, { memo } from "react";
import Dropdown from "./Dropdown";
import { ChevLeft, ChevronLeftIcon, ChevronRightIcon } from "../utils";

const Table = memo(function Table({ headers = [], children }) {
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-secondary">
          <thead className=" text-secondary uppercase border-b text-[13px]">
            <tr>
              {headers?.map((_header, _i) => (
                <th key={_i} scope="col" className="px-5 py-4 font-normal">
                  {_header?.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
        <Pagination />
      </div>
    </>
  );
});

Table.propTypes = {};

export default Table;

const Pagination = memo(function Pagination() {
  const _filterDateRangeOptions = [
    {
      label: "10",
      slug: "10",
    },
    {
      label: "30",
      slug: "30",
    },
    {
      label: "50",
      slug: "50",
    },
  ];
  return (
    <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between px-5 py-4" aria-label="Table navigation">
      <span className="text-[15px] font-normal text-gray-light mb-4 md:mb-0 w-full md:w-auto flex items-center">
        Showing{" "}
        <span className="font-semibold text-primary mx-2 border rounded-sm">
          <Dropdown className=" px-3 py-1 rounded-sm text-[15px] gap-[6px] bg-white" label={`10`} options={_filterDateRangeOptions} />
        </span>{" "}
        of 50
      </span>
      <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-9 gap-[2px]">
        <li className="">
          <a href="#" className="bg-tertiary rounded-[4px] flex items-center justify-center py-1 px-2 h-9 w-9 ms-0 leading-tight text-secondary rounded-s-sm  hover:text-blue-dark">
            <img src={ChevronLeftIcon} />
          </a>
        </li>
        <li className="">
          <a href="#" className="bg-blue-dark rounded-[4px] flex items-center justify-center py-1 px-2 h-9 w-9 leading-tight text-white">
            1
          </a>
        </li>
        <li className="">
          <a href="#" className="bg-tertiary rounded-[4px] flex items-center justify-center py-1 px-2 h-9 w-9 leading-tight text-secondary  hover:bg-gray-100 hover:text-blue-dark">
            2
          </a>
        </li>
        <li className="">
          <a href="#" className="bg-tertiary rounded-[4px] flex items-center justify-center py-1 px-2 h-9 w-9 leading-tight text-secondary  hover:bg-gray-100 hover:text-blue-dark">
            3
          </a>
        </li>
        <li className="">
          <a href="#" className="bg-tertiary rounded-[4px] flex items-center justify-center py-1 px-2 h-9 w-9 leading-tight text-secondary  rounded-e-sm hover:bg-gray-100 hover:text-blue-dark">
            <img src={ChevronRightIcon} />
          </a>
        </li>
      </ul>
    </nav>
  );
});

export const TableColumn = memo(function TableColumn({ value }) {
  return <td className="px-5 py-4">{value}</td>;
});
TableColumn.propTypes = {
  value: PropTypes.any, // any value that can be rendered in a table cell
};
