import { memo } from "react";
import PropTypes from "prop-types";
const NormalLabel = memo(function NormalLabel({ text }) {
  return <span className="text-secondary text-[14px] font-medium">{text}</span>;
});
NormalLabel.propTypes = {
  text: PropTypes.string.isRequired,
};
export default NormalLabel;
