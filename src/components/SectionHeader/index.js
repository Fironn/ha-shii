import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './SectionHeader.module.scss';

const propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
};

const defaultProps = {
  text: null,
  link: null,
};

const SectionHeader = ({text, link }) => {
  return (
    <div className={styles.container}>
      <h2>
        {link ? (
          <Link to={link}>
            {text}
          </Link>
        ) : (
          text
        )}
      </h2>
    </div>
  );
};

SectionHeader.propTypes = propTypes;
SectionHeader.defaultProps = defaultProps;

export default SectionHeader;