import React from 'react';
import PropTypes from 'prop-types';
import Link from '@atomikui/core/dist/components/link';
import List from '@atomikui/core/dist/components/list';
import ListItem from '@atomikui/core/dist/components/list-item';

const OpenSource = ({ preface, heading, projects, ...others }) => (
  <section {...others}>
    <h3 className="section-heading">{heading}</h3>
    <p className="text-align-center margin-bottom-24">{preface}</p>
    <List className="text-align-center">
      {projects.map(({ name, url, description }) => (
        <ListItem key={name} className="margin-bottom-20">
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-size-20 margin-bottom-12"
          >
            {name}
          </Link>
          <p>{description}</p>
        </ListItem>
      ))}
    </List>
  </section>
);

OpenSource.propTypes = {
  preface: PropTypes.string,
  heading: PropTypes.string,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
      description: PropTypes.string,
    }),
  ),
};

OpenSource.defaultProps = {
  preface: '',
  heading: '',
  projects: [],
};

export default OpenSource;
