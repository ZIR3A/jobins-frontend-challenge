import PropTypes from "prop-types";
import { memo } from "react";
import Header from "./Header";

const ContentWrapper = memo(function ContentWrapper({ children, title }) {
  return (
    <main className="main-section-wrapper">
      <Header title={title} />
      {children}
    </main>
  );
});

ContentWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default ContentWrapper;
