import PropTypes from "prop-types";
import React, { memo } from "react";

const Table = memo(function Table(props) {
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-secondary">
          <thead className=" text-secondary uppercase border-b text-[13px]">
            <tr>
              <th scope="col" className="px-5 py-4 font-normal">
                Product name
              </th>
              <th scope="col" className="px-5 py-4 font-normal">
                Color
              </th>
              <th scope="col" className="px-5 py-4 font-normal">
                Category
              </th>
              <th scope="col" className="px-5 py-4 font-normal">
                Price
              </th>
              <th scope="col" className="px-5 py-4 font-normal">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b hover:bg-tertiary text-primary text-[15px]">
              <td className="px-5 py-4">Apple MacBook Pro 17"</td>
              <td className="px-5 py-4">Silver</td>
              <td className="px-5 py-4">Laptop</td>
              <td className="px-5 py-4">$2999</td>
              <td className="px-5 py-4 text-right">
                <a href="#" className="font-medium text-blue-primary hover:underline">
                  Edit
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
});

Table.propTypes = {};

export default Table;
