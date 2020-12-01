import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, ProgressBar } from '@atomikui/core';

const SkillsList = ({ skills }) => (
  <List loose>
    {skills.map(({ label, rank }, index) => (
      <ListItem key={`skill-${index + 1}`}>
        <div className="flex flex--align-middle">
          <div style={{ flex: '0 150px', lineHeight: '1' }}>{label}</div>
          <div className="flex flex__item--grow">
            <ProgressBar now={rank} theme="cyan" shape="pill" />
          </div>
        </div>
      </ListItem>
    ))}
  </List>
);

SkillsList.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      rank: PropTypes.number,
    }),
  ),
};

SkillsList.defaultProps = {
  skills: [],
};

export default SkillsList;
