import React from 'react';
import { Button } from './Button';

export function ButtonPanel() {
  return (
    <div id="ButtonPanel">
      <div className="button-group">
        <Button buttonName="AC" color="lightgray" />
        <Button buttonName="+/-" color="lightgray" />
        <Button buttonName="%" color="lightgray" />
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

export default { ButtonPanel };
