import calculator from './calculator';

describe('calculator', () => {
  it('is an object', () => {
    expect(typeof calculator).toEqual('object');
  });

  describe('add', () => {
    it('is a function', () => {
      expect(typeof calculator.add).toEqual('function');
    });

    it('returns the sum of two numbers', () => {
      expect(calculator.add(4, 5)).toEqual(9);
    });

    it('throws an error when the input is invalid', () => {
      expect(() => calculator.add(4)).toThrow(TypeError('Invalid input'));
    });
  });

  describe('subtract', () => {
    it('is a function', () => {
      expect(typeof calculator.subtract).toEqual('function');
    });

    it('returns the difference of two numbers', () => {
      expect(calculator.subtract(4, 5)).toEqual(-1);
    });

    it('throws an error when the input is invalid', () => {
      expect(() => calculator.subtract(4, 'a')).toThrow(
        TypeError('Invalid input')
      );
    });
  });

  describe('multiply', () => {
    it('is a function', () => {
      expect(typeof calculator.multiply).toEqual('function');
    });

    it('returns the product of two numbers', () => {
      expect(calculator.multiply(4, 5)).toEqual(20);
    });

    it('throws an error when the input is invalid', () => {
      expect(() => calculator.multiply([1, 5])).toThrow(
        TypeError('Invalid input')
      );
    });
  });

  describe('divide', () => {
    it('is a function', () => {
      expect(typeof calculator.divide).toEqual('function');
    });

    it('returns the quotient of two numbers', () => {
      expect(calculator.divide(4, 3)).toBeCloseTo(1.33, 2);
    });

    it('returns Infinity when dividing by 0', () => {
      expect(calculator.divide(4, 0)).toEqual(Infinity);
    });

    it('throws an error when the input is invalid', () => {
      expect(() => calculator.divide(4, false)).toThrow(
        TypeError('Invalid input')
      );
    });
  });
});
