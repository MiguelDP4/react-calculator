import React from 'react';
import PropTypes from 'prop-types';
import { calculate } from '../logic/calculate';

function Display(props) {
  return (
    <div id="Display">
      <span className="display-content">{ props.operation }</span>
      <span className="display-content">{ props.numberDisplay }</span>
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
    <button type="button" 
    className={`${color}-background all-buttons${wide ? ' wide-button' : ' regular-button'}`}
    onClick={props.onClick}>
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

function ButtonPanel(props) {
  return (
    <div id="ButtonPanel">
      <div className="button-group">
        <Button buttonName="AC" color="red" onClick={() => props.onClick('AC')} />
        <Button buttonName="+/-" onClick={() => props.onClick('+/-')} />
        <Button buttonName="%" onClick={() => props.onClick('%')} />
        <Button buttonName="÷" onClick={() => props.onClick('÷')} />
      </div>
      <div className="button-group">
        <Button buttonName="7" color="lightgray" onClick={() => props.onClick('7')} />
        <Button buttonName="8" color="lightgray" onClick={() => props.onClick('8')} />
        <Button buttonName="9" color="lightgray" onClick={() => props.onClick('9')} />
        <Button buttonName="x" onClick={() => props.onClick('x')} />
      </div>
      <div className="button-group">
        <Button buttonName="4" color="lightgray" onClick={() => props.onClick('4')} />
        <Button buttonName="5" color="lightgray" onClick={() => props.onClick('5')} />
        <Button buttonName="6" color="lightgray" onClick={() => props.onClick('6')} />
        <Button buttonName="-" onClick={() => props.onClick('-')} />
      </div>
      <div className="button-group">
        <Button buttonName="1" color="lightgray" onClick={() => props.onClick('1')} />
        <Button buttonName="2" color="lightgray" onClick={() => props.onClick('2')} />
        <Button buttonName="3" color="lightgray" onClick={() => props.onClick('3')} />
        <Button buttonName="+" onClick={() => props.onClick('+')} />
      </div>
      <div className="button-group">
        <Button buttonName="0" color="lightgray" wide={true} onClick={() => props.onClick('0')} />
        <Button buttonName="." color="lightgray" onClick={() => props.onClick('.')} />
        <Button buttonName="=" onClick={() => props.onClick('=')} />
      </div>
    </div>
  );
}

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick(buttonName) {
    let calcObject = this.state;
    calcObject = calculate(calcObject, buttonName);
    this.setState(calcObject);
  }

  render() {
    return (
      <div id="App">
        <Display numberDisplay={this.state.next} operation={this.state.operation}/>
        <ButtonPanel onClick={ buttonName => this.handleClick(buttonName) }/>
      </div>
    );
  }
}

export default { App };
