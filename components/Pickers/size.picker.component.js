import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Picker from './picker.component';

const SizePicker = ({ size, ...props }) => {
  const sizes = ['S', 'M', 'L', 'XL'];
  const [value, setValue] = useState('S');

  const increase = () => {
    const indexOf = sizes.indexOf(value);

    if (indexOf <= sizes.length - 2) {
      setValue(sizes[indexOf + 1]);
    } else {
      setValue(sizes[0]);
    }
  };

  const reduce = () => {
    const indexOf = sizes.indexOf(value);

    if (indexOf >= 1) {
      setValue(sizes[indexOf - 1]);
    } else {
      setValue(sizes[sizes.length - 1]);
    }
  };

  return (
    <Picker leftClick={reduce} rightClick={increase} value={value} {...props} />
  );
};

SizePicker.propTypes = {
  size: PropTypes.oneOf(['S', 'M', 'L', 'XL']),
};

SizePicker.defaultProps = {
  size: 'M',
};

SizePicker.displayName = 'SizePicker';
export default SizePicker;
