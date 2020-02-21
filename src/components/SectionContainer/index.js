import PropTypes from 'prop-types';
import React from 'react';
import styles from './SectionContainer.module.scss';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  id: PropTypes.string,
};

const defaultProps = {
  id: null,
};

const SectionContainer = ({
  children,
  id,
}) => {
  return (
    <section id={id} className={styles.container}>
      {children}
    </section>
  );
};

SectionContainer.propTypes = propTypes;
SectionContainer.defaultProps = defaultProps;

export default SectionContainer;