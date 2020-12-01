import React from 'react';
import PropTypes from 'prop-types';

const OpenSource = ({ preface, heading, projects, ...others }) => (
  <section {...others}>
    <h3 className="section-heading">{heading}</h3>
    <p className="text-align-center margin-bottom-24">{preface}</p>
  </section>
);

OpenSource.propTypes = {
  preface: PropTypes.string,
  heading: PropTypes.string,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
      description: PropTypes.string,
    }),
  ),
};

OpenSource.defaultProps = {
  preface: '',
  heading: '',
  projects: [],
};

export default OpenSource;
