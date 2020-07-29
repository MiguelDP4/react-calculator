import React from 'react';
import PropTypes from 'prop-types';
import { calculate } from './logic.calculate';

function Display(props) {
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

function Button(props) {
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

function ButtonPanel() {
  return (
    <div id="ButtonPanel">
      <div className="button-group">
        <Button buttonName="AC" color="red" />
        <Button buttonName="+/-" />
        <Button buttonName="%" />
        <Button buttonName="÷" />
      </div>
      <div className="button-group">
        <Button buttonName="7" color="lightgray" />
        <Button buttonName="8" color="lightgray" />
        <Button buttonName="9" color="lightgray" />
        <Button buttonName="x" />
      </div>
      <div className="button-group">
        <Button buttonName="4" color="lightgray" />
        <Button buttonName="5" color="lightgray" />
        <Button buttonName="6" color="lightgray" />
        <Button buttonName="-" />
      </div>
      <div className="button-group">
        <Button buttonName="1" color="lightgray" />
        <Button buttonName="2" color="lightgray" />
        <Button buttonName="3" color="lightgray" />
        <Button buttonName="+" />
      </div>
      <div className="button-group">
        <Button buttonName="0" color="lightgray" wide="true" />
        <Button buttonName="." color="lightgray" />
        <Button buttonName="=" />
      </div>
    </div>
  );
}

export function App() {
  return (
    <div id="App">
      <Display />
      <ButtonPanel />
    </div>
  );
}

export default { App };
