import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, Link } from '@atomikui/core';

const SocialMedia = ({ socialMediaHeading, icons }) => (
  <>
    <h4 className="section-subheading">{socialMediaHeading}</h4>
    <List type="horizontal">
      {icons.map(({ title, path, height, width, fill, viewBox, url }) => (
        <ListItem key={title}>
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            title={title}
          >
            <svg
              className="margin-top-4"
              fill={fill}
              enableBackground={viewBox}
              height={height}
              width={width}
              viewBox={viewBox}
              xmlns="https://www.w3.org/2000/svg"
            >
              <title>{title}</title>
              <path d={path} />
            </svg>
          </Link>
        </ListItem>
      ))}
    </List>
  </>
);

SocialMedia.propTypes = {
  socialMediaHeading: PropTypes.string,
  icons: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string,
      path: PropTypes.string,
      fill: PropTypes.string,
      viewBox: PropTypes.string,
      height: PropTypes.number,
      width: PropTypes.number,
    }),
  ),
};

SocialMedia.defaultProps = {
  socialMediaHeading: '',
  icons: [],
};

export default SocialMedia;
