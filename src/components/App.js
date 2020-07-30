import React from 'react';
import { Display } from './Display';
import { ButtonPanel } from './ButtonPanel';

export function App() {
  return (
    <div className="App" id="CalculatorApplication">
      <Display />
      <ButtonPanel />
    </div>
  );
}

export default { App };
