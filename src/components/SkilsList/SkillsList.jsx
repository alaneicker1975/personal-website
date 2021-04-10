import React from 'react';
import PropTypes from 'prop-types';
import List from '@atomikui-core/list';
import ListItem from '@atomikui-core/list-item';
import ProgressBar from '@atomikui-core/progress-bar';

const SkillsList = ({ skills }) => (
  <List className="skills-list">
    {skills.map(({ label, rank }) => (
      <ListItem className="skills-list__item" key={label}>
        <div>
          <div>{label}</div>
          <ProgressBar now={rank} theme="cyan" shape="pill" />
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
