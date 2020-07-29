import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  const { numberDisplay } = props;
  return (<div>{ numberDisplay }</div>);
}

Display.propTypes = {
  numberDisplay: PropTypes.string,
};

Display.defaultProps = {
  numberDisplay: '0',
};

function Button(props) {
  const { buttonName } = props;
  return (<button type="button">{ buttonName }</button>);
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
};

function ButtonPanel() {
  return (
    <div>
      <div className="buttonGroup">
        <Button buttonName="AC" />
        <Button buttonName="+/-" />
        <Button buttonName="%" />
        <Button buttonName="÷" />
      </div>
      <div className="buttonGroup">
        <Button buttonName="7" />
        <Button buttonName="8" />
        <Button buttonName="9" />
        <Button buttonName="X" />
      </div>
      <div className="buttonGroup">
        <Button buttonName="4" />
        <Button buttonName="5" />
        <Button buttonName="6" />
        <Button buttonName="-" />
      </div>
      <div className="buttonGroup">
        <Button buttonName="1" />
        <Button buttonName="2" />
        <Button buttonName="3" />
        <Button buttonName="+" />
      </div>
      <div className="buttonGroup">
        <Button buttonName="0" />
        <Button buttonName="." />
        <Button buttonName="=" />
      </div>
    </div>
  );
}

export function App() {
  return (
    <div className="App" id="CalculatorApplication">
      <Display />
      <ButtonPanel />
    </div>
  );
}

export default { App };
