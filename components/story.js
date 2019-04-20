import React from 'react';
import PropTypes from 'prop-types';

const Story = ({
  altText, category, image, title,
}) => (
  <a href="/" className="d-flex flex-column ">
    <img alt={altText} className="crf-story--image" src={image} />
    <div className="crf-story--text">
      <h3>{title}</h3>
      <div>{category}</div>
    </div>
  </a>
);

Story.propTypes = {
  altText: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Story;
