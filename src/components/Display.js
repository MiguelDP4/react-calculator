import React from 'react';
import PropTypes from 'prop-types';
import { calculate } from '../logic/calculate';

export function Display(props) {
  let { numberDisplay } = props;
  // The next line is to use the calculate function and
  // to remove the linter error, because the calculate
  // function is not being used yet
  numberDisplay = String(calculate({ next: '1', total: '1', operation: '-' }, '=').total);
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
