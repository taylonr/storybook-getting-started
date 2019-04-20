import React from 'react';
import PropTypes from 'prop-types';
import Story from './story';

const Stories = ({ stories }) => (
  <div className="row">
    {stories.map(s => (
      <div className="col-3">
        <Story key={s.title} {...s} />
      </div>
    ))}
  </div>
);

Stories.propTypes = {
  stories: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Stories;
