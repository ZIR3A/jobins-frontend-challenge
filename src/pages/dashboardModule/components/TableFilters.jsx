import { memo } from "react";
import { _filterDateRangeOptions, _filterStatusOptions } from "../constants";
import { BasicInput, Dropdown } from "../../../shared";

const TableFilters = memo(function TableFilters() {
  return (
    <div className="flex flex-wrap md:flex-no-wrap gap-4 md:gap-0 justify-between mt-4">
      <div className="flex  gap-[14px]">
        <Dropdown className="h-[40px] border px-3 text-secondary rounded-sm text-[15px] gap-[6px] bg-white" label={`Status: All`} options={_filterStatusOptions} />
        <div>
          <BasicInput inputClassName="h-[40px] border-none rounded-sm w-[200px] placeholder-secondary placeholder:font-normal placeholder:text-[14px] placeholder-opacity-0" placeHolder="Search..." />
        </div>
      </div>
      <Dropdown className="h-[40px] border px-3 py-1 text-secondary rounded-sm text-[15px] gap-[6px] bg-white" label={`Filter by date range`} options={_filterDateRangeOptions} />
    </div>
  );
});

TableFilters.propTypes = {};

export default TableFilters;
