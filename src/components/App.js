import React from 'react';

function Display() {
  return(<div>Display</div>);
}

function ButtonPanel() {
  return(<div>Button Panel</div>);
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