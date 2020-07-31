import React from 'react';
import PropTypes from 'prop-types';

export function Display(props) {
  const { operation, numberDisplay } = props;
  return (
    <div id="Display">
      <span className="display-content">{ operation }</span>
      <span className="display-content">{ numberDisplay == null ? '0' : numberDisplay }</span>
    </div>
  );
}

Display.propTypes = {
  numberDisplay: PropTypes.string,
  operation: PropTypes.string,
};

Display.defaultProps = {
  numberDisplay: '0',
  operation: '',
};

export default { Display };
