import caesar from './caesar';

describe('caesar', () => {
  it('is a function', () => {
    expect(typeof caesar).toEqual('function');
  });

  it('encrypts lowercase characters', () => {
    expect(caesar('abc xyz', 1)).toEqual('bcd yza');
  });

  it('encrypts uppercase characters', () => {
    expect(caesar('ABC XYZ')).toEqual('BCD YZA');
  });

  it('keeps the same case', () => {
    expect(caesar('Microverse', 7)).toEqual('Tpjyvclyzl');
  });

  it('does not alter punctuation', () => {
    expect(caesar('.,!?', 5)).toEqual('.,!?');
  });

  it('does not alter numbers', () => {
    expect(caesar('12345', 5)).toEqual('12345');
  });

  it('throws an error when the input is not valid', () => {
    expect(() => caesar(123, 1)).toThrow(TypeError('Invalid input'));
    expect(() => caesar('abc', true)).toThrow(TypeError('Invalid input'));
    expect(() => caesar()).toThrow(TypeError('Invalid input'));
  });
});
