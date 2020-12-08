import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@atomikui/core';
import { AtomikUILogo } from '../../components';

const Hero = ({ subtitle, title, titleLeadIn, cta, ...others }) => (
  <section className="hero" {...others}>
    <div className="hero__content">
      <AtomikUILogo />
      <div>
        {titleLeadIn && <h3>{titleLeadIn}</h3>}
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        {cta && (
          <Link
            className="atomikui-btn atomikui-btn--red atomikui-btn--pill"
            href={cta.href}
            rel={cta.rel}
            target={cta.target}
          >
            {cta.text}
          </Link>
        )}
      </div>
    </div>
  </section>
);

Hero.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleLeadIn: PropTypes.string,
  cta: PropTypes.shape({
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    rel: PropTypes.string,
    target: PropTypes.string,
  }),
};

Hero.defaultProps = {
  titleLeadIn: null,
  cta: null,
};

export default Hero;
