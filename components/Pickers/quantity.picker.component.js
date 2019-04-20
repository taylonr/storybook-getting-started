import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Picker from './picker.component';

const QuantityPicker = ({ quantity, ...props }) => {
  const [qty, setQuantity] = useState(quantity);

  return (
    <Picker
      leftClick={() => setQuantity(qty - 1)}
      rightClick={() => setQuantity(qty + 1)}
      value={qty}
      {...props}
    />
  );
};

QuantityPicker.propTypes = {
  quantity: PropTypes.number,
};

QuantityPicker.defaultProps = {
  quantity: 1,
};

QuantityPicker.displayName = 'QuantityPicker';
export default QuantityPicker;
