import React from 'react';
import PropTypes from 'prop-types';
import { Logo } from 'components';

const Header = ({ logoText, mobileLogoText, navItems }) => (
  <header className="header">
    <div className="header__logo">
      <Logo height={40} />
      <div className="header__logo-text" />
    </div>
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
