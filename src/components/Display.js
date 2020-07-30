import React from 'react';
import PropTypes from 'prop-types';

export function Display(props) {
  const { numberDisplay } = props;
  return (
    <div id="Display">
      <span className="display-content" />
      <span className="display-content">{ numberDisplay }</span>
    </div>
  );
}

Display.propTypes = {
  numberDisplay: PropTypes.string,
};

Display.defaultProps = {
  numberDisplay: '0',
};

export default { Display };
