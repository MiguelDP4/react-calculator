import Big from './big.mjs'; // eslint-disable-line import/extensions

export function operate(numberOne, numberTwo, operation) {
  let result = 0;
  const x = new Big(numberOne);
  const y = new Big(numberTwo);
  switch (operation) {
    case '+':
      result = y + x;
      break;
    case '-':
      result = y - x;
      break;
    case 'x':
      result = y * x;
      break;
    case '÷':
      result = y / x;
      break;
    case '%':
      result = x / 100;
      break;
    case '+/-':
      result = x * -1;
      break;
    default:
      result = 0;
  }
  return result;
}

export default { operate };
