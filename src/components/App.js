import React from 'react';
import { Display } from './Display';
import { ButtonPanel } from './ButtonPanel';
import { calculate } from '../logic/calculate';

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
    const { total, next, operation } = calcObject;
    this.setState({ total, next, operation });
  }

  render() {
    const { next, operation } = this.state;
    return (
      <div id="App">
        <Display numberDisplay={next} operation={operation} />
        <ButtonPanel onClick={buttonName => this.handleClick(buttonName)} />
      </div>
    );
  }
}

export default { App };
