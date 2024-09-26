import PropTypes from "prop-types";
import { memo } from "react";

const BasicInput = memo(function BasicInput({ label = "", inputClassName = "", placeHolder = "" }) {
  return (
    <div className="max-w-sm mx-auto">
      {label && (
        <label htmlFor="email-address-icon" className="block mb-2 text-sm font-medium text-primary">
          {label}
        </label>
      )}
      <div className="relative border-none">
        <div className="absolute inset-y-0 end-0 flex items-center pe-4 pointer-events-none">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.87495 0.5C5.85839 0.500087 4.85659 0.743273 3.95314 1.20927C3.04968 1.67527 2.27077 2.35056 1.68137 3.17882C1.09198 4.00707 0.709203 4.96426 0.564977 5.97053C0.420751 6.97681 0.519258 8.00298 0.85228 8.96344C1.1853 9.9239 1.74318 10.7908 2.47937 11.4918C3.21557 12.1928 4.10872 12.7076 5.08433 12.9932C6.05994 13.2788 7.0897 13.327 8.08771 13.1337C9.08572 12.9404 10.023 12.5112 10.8214 11.882L13.5604 14.621C13.7019 14.7576 13.8913 14.8332 14.088 14.8315C14.2846 14.8298 14.4728 14.7509 14.6118 14.6119C14.7509 14.4728 14.8297 14.2847 14.8315 14.0881C14.8332 13.8914 14.7576 13.702 14.6209 13.5605L11.8819 10.8215C12.6229 9.88146 13.0843 8.7518 13.2133 7.56179C13.3422 6.37179 13.1335 5.16952 12.6111 4.09257C12.0887 3.01562 11.2736 2.10752 10.2592 1.47217C9.24473 0.83683 8.07192 0.49992 6.87495 0.5ZM1.99995 6.875C1.99995 5.58207 2.51356 4.34209 3.4278 3.42785C4.34204 2.51361 5.58202 2 6.87495 2C8.16788 2 9.40785 2.51361 10.3221 3.42785C11.2363 4.34209 11.7499 5.58207 11.7499 6.875C11.7499 8.16793 11.2363 9.40791 10.3221 10.3221C9.40785 11.2364 8.16788 11.75 6.87495 11.75C5.58202 11.75 4.34204 11.2364 3.4278 10.3221C2.51356 9.40791 1.99995 8.16793 1.99995 6.875Z"
              fill="#8B909A"
            />
          </svg>
        </div>
        <input type="text" id="email-address-icon" className={`block w-full pe-10 p-2.5 ps-4 ${inputClassName}`} placeholder={placeHolder} />
      </div>
    </div>
  );
});

BasicInput.propTypes = {
  label: PropTypes.string,
  inputClassName: PropTypes.string,
  placeHolder: PropTypes.string,
};

export default BasicInput;
