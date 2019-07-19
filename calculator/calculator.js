const add = (a, b) => checkInput(a, b) && a + b;

const subtract = (a, b) => checkInput(a, b) && a - b;

const multiply = (a, b) => checkInput(a, b) && a * b;

const divide = (a, b) => checkInput(a, b) && a / b;

const checkInput = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number')
    throw new TypeError('Invalid input');

  return true;
};

export default { add, subtract, multiply, divide };
