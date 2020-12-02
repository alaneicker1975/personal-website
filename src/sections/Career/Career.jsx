import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Card, List, ListItem, Link } from '@atomikui/core';

const Career = ({ downloadUrl, heading, jobHistory, preface, ...others }) => (
  <section {...others}>
    <h3 className="section-heading">{heading}</h3>
    <p
      className="text-align-center margin-bottom-24"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: preface }}
    />
    <Grid>
      <Row>
        {jobHistory.map(({ company, location, positionsHeld }) => (
          <Col md={4} key={company} className="margin-bottom-16">
            <Card
              title={
                <div className="text-align-center">
                  <h4>{company}</h4>
                  <h5 className="text-color-white text-size-16">{location}</h5>
                </div>
              }
            >
              <div className="text-align-center">
                <p className="text-weight-semibold margin-bottom-16">
                  Positions Held:
                </p>
                <List loose>
                  {positionsHeld.map(({ title, duration }) => (
                    <ListItem key={title}>
                      <div className="text-weight-semibold">{title}</div>
                      {duration}
                    </ListItem>
                  ))}
                </List>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Grid>
    <div className="text-align-center margin-top-16">
      <Link
        className="atomikui-btn atomikui-btn--red atomikui-btn--pill"
        href={downloadUrl}
        rel="noopener noreferrer"
        target="_blank"
      >
        Download Resum&eacute;
      </Link>
    </div>
  </section>
);

Career.propTypes = {
  downloadUrl: PropTypes.string,
  heading: PropTypes.string,
  jobHistory: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string,
      description: PropTypes.string,
      location: PropTypes.string,
      tenure: PropTypes.string,
      url: PropTypes.string,
      positionsHeld: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          duration: PropTypes.string,
        }),
      ),
    }),
  ),
  /** Career section preface */
  preface: PropTypes.string,
};

Career.defaultProps = {
  downloadUrl: '',
  heading: '',
  jobHistory: [],
  preface: '',
};

export default Career;
