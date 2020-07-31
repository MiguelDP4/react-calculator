import React from 'react';
import { Display } from './Display';
import { ButtonPanel } from './ButtonPanel';
import { calculate } from '../logic/calculate';

export function App() {
  return (
    <div id="App">
      <Display numberDisplay={String(calculate({ next: '1', total: '1', operation: '-' }, '=').total)} />
      <ButtonPanel />
    </div>
  );
}

export default { App };
