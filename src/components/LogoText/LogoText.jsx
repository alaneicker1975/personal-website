import React from 'react';
import PropTypes from 'prop-types';

const LogoText = ({ mobileLogoText, logoText, strapline }) => (
  <div className="text-size-20">
    <span className="display-none display-inline@medium">
      <span className="text-weight-semibold">{logoText}</span>
      <span className="display-none display-inline@large">
        <span className="margin-left-8 margin-right-8">&bull;</span>
        <span className="text-weight-light">{strapline}</span>
      </span>
    </span>
    <span className="display-none@medium">{mobileLogoText}</span>
  </div>
);

LogoText.propTypes = {
  logoText: PropTypes.string,
  strapline: PropTypes.string,
  mobileLogoText: PropTypes.string,
};

LogoText.defaultProps = {
  logoText: '',
  strapline: '',
  mobileLogoText: '',
};

export default LogoText;
