import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@atomikui/core';
import { Logo, LogoText, Nav } from '..';

const Header = ({ navItems, ...logoTextProps }) => (
  <header className="header">
    <Link href="#top" className="header__logo">
      <Logo />
      <LogoText {...logoTextProps} />
    </Link>
    <Nav navItems={navItems} />
  </header>
);

Header.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      title: PropTypes.string,
      rel: PropTypes.string,
      target: PropTypes.string,
    }),
  ),
};

Header.defaultProps = {
  navItems: [],
};

export default Header;
