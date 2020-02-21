import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const WhiteBox = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

WhiteBox.propTypes = propTypes;

export default WhiteBox;