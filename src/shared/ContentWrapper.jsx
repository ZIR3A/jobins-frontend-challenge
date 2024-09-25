import PropTypes from "prop-types";
import { memo } from "react";
import Header from "./Header";

const ContentWrapper = memo(function ContentWrapper({ children, title }) {
  return (
    <section className="main-section-wrapper">
      <Header title={title} />
      {children}
    </section>
  );
});

ContentWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default ContentWrapper;
