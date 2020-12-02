import React, { useContext } from 'react';
import { List, ListItem, Link } from '@atomikui/core';
import { AppContext } from '../../context';

const SocialMedia = () => {
  const {
    content: {
      socialMedia: { socialMediaHeading, icons },
    },
  } = useContext(AppContext);

  return (
    <>
      <h4 className="section-subheading">{socialMediaHeading}</h4>
      <List type="horizontal">
        {icons.map(({ title, path, height, width, fill, viewBox, url }) => (
          <ListItem key={title}>
            <Link href={url} target="_blank" rel="noopener noreferrer">
              <svg
                className="margin-top-2"
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
};

export default SocialMedia;
