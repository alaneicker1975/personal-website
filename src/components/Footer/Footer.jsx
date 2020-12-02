import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Logo, ContactInfo, SocialMedia } from '..';

const Footer = ({ copyrightText }) => (
  <footer>
    <Grid>
      <Row>
        <Col md={6} className="margin-top-24 margin-top-collapse@medium">
          <ContactInfo />
        </Col>
        <Col md={6} className="margin-top-24 margin-top-collapse@medium">
          <SocialMedia />
        </Col>
      </Row>
    </Grid>
    <p className="margin-top-20 text-size-12">
      &copy; {new Date().getFullYear()} {copyrightText}
    </p>
  </footer>
);

Footer.propTypes = {
  copyrightText: PropTypes.string,
};

Footer.defaultProps = {
  copyrightText: '',
};

export default Footer;
