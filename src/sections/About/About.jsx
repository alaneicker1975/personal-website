import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { SkillsList } from '../../components';

const About = ({ aboutHeading, skillsHeading, bio, skills, ...others }) => (
  <section {...others}>
    <Grid>
      <Row>
        <Col md={6}>
          <h3 className="section-heading">{aboutHeading}</h3>
          {bio.map((paragraph, index) => (
            <p key={`bio-text-${index + 1}`}>{paragraph}</p>
          ))}
        </Col>
        <Col md={1} />
        <Col md={5}>
          <h3 className="section-heading margin-top-16 margin-top-collapse@medium">
            {skillsHeading}
          </h3>
          <SkillsList skills={skills} />
        </Col>
      </Row>
    </Grid>
  </section>
);

About.propTypes = {
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
  aboutHeading: '',
  skillsHeading: '',
  bio: '',
  skills: [],
};

export default About;
