import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { List, ListItem, Link } from '@atomikui/core';

const Nav = ({ navItems }) => {
  const [section, setSection] = useState(null);

  useEffect(() => {
    window.addEventListener(
      'hashchange',
      () => {
        setSection(window.location.hash.replace('#', ''));
      },
      false,
    );
  }, []);

  return (
    <nav>
      <List className="nav" type="horizontal">
        {navItems.map(({ href, rel, target, text, title }) => (
          <ListItem key={title}>
            <Link
              href={href}
              rel={rel}
              target={target}
              title={title}
              className={classnames({
                'is-active': section === text.toLowerCase().replace(/\s/, '-'),
              })}
            >
              {text}
            </Link>
          </ListItem>
        ))}
      </List>
    </nav>
  );
};

Nav.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      title: PropTypes.string,
      rel: PropTypes.string,
      target: PropTypes.string,
    }),
  ),
};

Nav.defaultProps = {
  navItems: [],
};

export default Nav;
