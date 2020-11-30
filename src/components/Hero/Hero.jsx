import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@atomikui/core';
import { Logo } from '..';

const Hero = ({ subtitle, title, titleLeadIn, cta }) => (
  <div className="hero">
    <Logo />
    <div className="hero__content">
      <h3>{titleLeadIn}</h3>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <Link
        className="atomikui-btn atomikui-btn--red atomikui-btn--pill"
        href={cta.href}
        rel={cta.rel}
        target={cta.target}
      >
        {cta.text}
      </Link>
    </div>
  </div>
);

Hero.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string,
  titleLeadIn: PropTypes.string,
};

Hero.defaultProps = {
  subtitle: '',
  title: '',
  titleLeadIn: '',
};

export default Hero;
