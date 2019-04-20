import React from 'react';
import PropTypes from 'prop-types';

const Picker = ({
  label, leftClick, rightClick, value,
}) => {
  const leftKeyPress = (e) => {
    if (e.code === 13) {
      leftClick();
    }
  };

  const rightKeyPress = (e) => {
    if (e.code === 13) {
      rightClick();
    }
  };

  return (
    <div className="crf-value">
      <div className="crf-value--label">{`${label}:`}</div>
      <div>
        <span role="button" tabIndex="0" className="crf-value--action" onClick={leftKeyPress} onKeyDown={leftClick}>&#60;</span>
        <span className="crf-value--value">{value}</span>
        <span role="button" tabIndex="0" className="crf-value--action" onClick={rightClick} onKeyDown={rightKeyPress}>&#62;</span>
      </div>
    </div>
  );
};

Picker.propTypes = {
  label: PropTypes.string,
  leftClick: PropTypes.func.isRequired,
  rightClick: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

Picker.defaultProps = {
  label: null,
  value: null,
};

export default Picker;
