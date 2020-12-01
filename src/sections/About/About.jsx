import React from 'react';
import PropTypes from 'prop-types';
import { Quotation } from '@atomikui/core';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { SkillsList } from '../../components';

const About = ({
  preface,
  aboutHeading,
  skillsHeading,
  bio,
  skills,
  ...others
}) => (
  <section {...others}>
    <Quotation pullquote>{preface}</Quotation>
    <Grid className="margin-top-18">
      <Row>
        <Col lg={6}>
          <h3 className="section-heading">{aboutHeading}</h3>
          {bio.map((paragraph, index) => (
            <p key={`bio-text-${index + 1}`}>{paragraph}</p>
          ))}
        </Col>
        <Col lg={1} />
        <Col lg={5}>
          <h3 className="section-heading margin-top-24 margin-top-collapse@large">
            {skillsHeading}
          </h3>
          <SkillsList skills={skills} />
        </Col>
      </Row>
    </Grid>
  </section>
);

About.propTypes = {
  preface: PropTypes.string,
  aboutHeading: PropTypes.string,
  skillsHeading: PropTypes.string,
  bio: PropTypes.arrayOf(PropTypes.string),
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      rank: PropTypes.number,
    }),
  ),
};

About.defaultProps = {
  preface: '',
  aboutHeading: '',
  skillsHeading: '',
  bio: '',
  skills: [],
};

export default About;
