import operate from './operate';

export function calculate (calculator, buttonName) {
  switch(buttonName) {
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
      calculator.next += buttonName;
    break;
    case '+':
    case '-':
    case 'x':
    case '÷':
      calculator.operation = buttonName;
    break;
    case '%':
    case '+/-':
      calculator.next = String(operate(calculator.next, calculator.total, calculator.operation));
    break;
    case '=':
      calculator.total = operate(calculator.next, calculator.total, calculator.operation);
      break;
    default:
      alert('You are doing something wrong');  
  }
};

export default { calculate };