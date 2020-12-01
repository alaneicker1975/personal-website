import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, ProgressBar } from '@atomikui/core';

const SkillsList = ({ skills }) => (
  <List className="skills-list">
    {skills.map(({ label, rank }, index) => (
      <ListItem className="skills-list__item" key={`skill-${index + 1}`}>
        <div>
          <div>{label}</div>
          <div>
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
