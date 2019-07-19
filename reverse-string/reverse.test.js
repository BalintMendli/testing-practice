import reverse from './reverse';

describe('Reverse', () => {
  it('is a function', () => {
    expect(typeof reverse).toEqual('function');
  });

  it('reverses the string', () => {
    expect(reverse('word')).toEqual('drow');
  });

  it('returns the same string for palindromes', () => {
    expect(reverse('racecar')).toEqual('racecar');
  });

  it('throws an error when the input is not a string', () => {
    expect(() => reverse(true)).toThrow(TypeError('Invalid input'));
    expect(() => reverse()).toThrow(TypeError('Invalid input'));
  });
});
