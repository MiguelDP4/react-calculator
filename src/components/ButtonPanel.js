import React from 'react';
import { Button } from './Button';

export function ButtonPanel(props) {
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
        <Button buttonName="0" color="lightgray" wide onClick={() => props.onClick('0')} />
        <Button buttonName="." color="lightgray" onClick={() => props.onClick('.')} />
        <Button buttonName="=" onClick={() => props.onClick('=')} />
      </div>
    </div>
  );
}

ButtonPanel.propTypes = {
  onClick: PropTypes.func.isRequired,
};


export default { ButtonPanel };
