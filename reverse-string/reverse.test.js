const reverse = require('./reverse');

describe('Reverse', function() {
  it('is a function', () => {
    expect(typeof reverse).toEqual('function');
  });

  it('reverses the string', () => {
    expect(reverse('word')).toEqual('drow');
  });

  it('returns the same string for palindromes', () => {
    expect(reverse('racecar')).toEqual('racecar');
  });
});
