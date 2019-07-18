const calculator = require('./calculator');

describe('Calculator', function() {
  it('is an object', () => {
    expect(typeof calculator).toEqual('object');
  });

  describe('Add', function() {
    it('is a function', () => {
      expect(typeof calculator.add).toEqual('function');
    });

    it('returns the sum of two numbers', () => {
      expect(calculator.add(4, 5)).toEqual(9);
    });
  });

  describe('Subtract', function() {
    it('is a function', () => {
      expect(typeof calculator.subtract).toEqual('function');
    });

    it('returns the difference of two numbers', () => {
      expect(calculator.subtract(4, 5)).toEqual(-1);
    });
  });

  describe('multiply', function() {
    it('is a function', () => {
      expect(typeof calculator.multiply).toEqual('function');
    });

    it('returns the product of two numbers', () => {
      expect(calculator.multiply(4, 5)).toEqual(20);
    });
  });

  describe('divide', function() {
    it('is a function', () => {
      expect(typeof calculator.divide).toEqual('function');
    });

    it('returns the quotient of two numbers', () => {
      expect(calculator.divide(4, 5)).toEqual(0.8);
    });
  });
});
