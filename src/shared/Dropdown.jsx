import PropTypes from "prop-types";
import { memo } from "react";

const Dropdown = memo(function Dropdown({ className = "", label = "", options = [] }) {
  return (
    <>
      <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className={`${className} flex items-center`} type="button">
        {label}
        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        </svg>
      </button>
      <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
          {options?.map((_option, _i) => (
            <li key={_i}>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                {_option?.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
});

Dropdown.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string })).isRequired,
};

export default Dropdown;
