import React from 'react';
import PropTypes from 'prop-types';

const LogoText = ({ mobileLogoText, logoText, strapline }) => (
  <div>
    <span className="display-none display-inline@medium">
      <span className="text-weight-semibold text-size-20">{logoText}</span>
      <span className="display-none display-inline@large">
        <span className="margin-left-8 margin-right-8">&bull;</span>
        <span className="text-weight-light text-size-20">{strapline}</span>
      </span>
    </span>
    <span className="display-none@medium text-size-24">{mobileLogoText}</span>
  </div>
);

LogoText.propTypes = {
  logoText: PropTypes.string.isRequired,
  strapline: PropTypes.string,
  mobileLogoText: PropTypes.string,
};

LogoText.defaultProps = {
  strapline: '',
  mobileLogoText: '',
};

export default LogoText;
