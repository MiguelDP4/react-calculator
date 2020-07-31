import React from 'react';
import PropTypes from 'prop-types';

export function Button(props) {
  const {
    buttonName, color, wide, onClick,
  } = props;
  return (
    <button
      type="button"
      className={`${color}-background all-buttons${wide ? ' wide-button' : ' regular-button'}`}
      onClick={onClick}
    >
      { buttonName }
    </button>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: 'default',
  wide: false,
};

export default { Button };
