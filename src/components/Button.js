import React from 'react';
import PropTypes from 'prop-types';

export function Button(props) {
  const { buttonName, color, wide } = props;
  return (
    <button type="button" className={`${color}-background all-buttons${wide ? ' wide-button' : ' regular-button'}`}>
      { buttonName }
    </button>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  color: 'default',
  wide: false,
};

export default { Button };
