import React from 'react';
import PropTypes from 'prop-types';
import { Logo } from '..';

const Header = ({ logoText, strapline, mobileLogoText, navItems }) => (
  <header className="header">
    <a href="#top" className="header__logo">
      <Logo height={40} />
      <span className="header__logo-text">
        {logoText} &bull;
        <span className="header__logo-strapline">{strapline}</span>
      </span>
    </a>
    <nav />
  </header>
);

Header.propTypes = {
  logoText: PropTypes.string,
  mobileLogoText: PropTypes.string,
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      /** Link URL */
      href: PropTypes.string,
      /** Link title */
      title: PropTypes.string,
      /** Link relattribute */
      rel: PropTypes.string,
      /** Link target */
      target: PropTypes.string,
    }),
  ),
};

Header.defaultProps = {
  logoText: '',
  mobileLogoText: '',
  navItems: [],
};

export default Header;
