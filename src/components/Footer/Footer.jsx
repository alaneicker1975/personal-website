import React, { Children, useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@atomikui/core';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { BeardLogo, EasterEgg } from '..';

const Footer = ({ copyrightText, children }) => {
  const [showSurprise, setShowSurprise] = useState(false);

  if (children && children.length > 2) {
    throw new Error(
      `Error: Expected 2 children but recieved ${children.length}`,
    );
  }

  return (
    <footer>
      {children && (
        <Grid>
          <Row>
            {Children.map(children, (child, index) => (
              <Col
                key={`content-${index + 1}`}
                md={6}
                className="margin-top-24 margin-top-collapse@medium"
              >
                {child}
              </Col>
            ))}
          </Row>
        </Grid>
      )}
      <Button
        className="margin-top-24"
        theme="hollow"
        size="md"
        aria-label="Click me if you dare"
        onClick={() => setShowSurprise(true)}
      >
        <BeardLogo width={35} />
      </Button>
      <p className="margin-top-8 text-size-12">
        &copy; {new Date().getFullYear()} {copyrightText}
      </p>
      <EasterEgg
        isActive={showSurprise}
        onClick={() => setShowSurprise(false)}
      />
    </footer>
  );
};

Footer.propTypes = {
  copyrightText: PropTypes.string,
  children: PropTypes.node,
};

Footer.defaultProps = {
  copyrightText: '',
  children: null,
};

export default Footer;
