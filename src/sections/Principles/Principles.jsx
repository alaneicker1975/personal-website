import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import {
  faUniversalAccess,
  faAward,
  faMobileAlt,
} from '@fortawesome/free-solid-svg-icons';

const isons = {
  accessibility: faUniversalAccess,
  quality: faAward,
  mobileFirst: faMobileAlt,
};

const Principles = ({ heading, principles, ...others }) => (
  <section {...others}>
    <h3 className="section-heading">{heading}</h3>
    <Grid>
      <Row>
        {principles.map(({ title, text, icon }, index) => (
          <Col key={`principle-${index + 1}`} md={4}>
            <div className="text-align-center">
              <Icon
                className="margin-bottom-4"
                icon={isons[icon]}
                size="3x"
                color="#00bcd4"
              />
              <h4 className="section-subheading">{title}</h4>
            </div>
            {text}
          </Col>
        ))}
      </Row>
    </Grid>
  </section>
);

Principles.propTypes = {
  heading: PropTypes.string.isRequired,
  principles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      text: PropTypes.string,
      icon: PropTypes.string,
    }),
  ).isRequired,
};

export default Principles;
