import { operate } from './operate';

export function calculate(calculator, buttonName) {
  const newCalc = {
    next: calculator.next,
    total: calculator.total,
    operation: calculator.operation,
  };
  switch (buttonName) {
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '0':
      newCalc.next += buttonName;
      break;
    case '+':
    case '-':
    case 'x':
    case '÷':
      newCalc.operation = buttonName;
      break;
    case '%':
    case '+/-':
      newCalc.next = String(operate(newCalc.next, newCalc.total, newCalc.operation));
      break;
    case '=':
      newCalc.total = operate(newCalc.next, newCalc.total, newCalc.operation);
      break;
    default:
      return 'error';
  }
  console.log(newCalc);
  return newCalc;
}

export default { calculate };
