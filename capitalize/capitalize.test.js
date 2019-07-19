import capitalize from './capitalize';

describe('capitalize', () => {
  it('is a function', () => {
    expect(typeof capitalize).toEqual('function');
  });

  it('capitalizes the first letter of the string', () => {
    expect(capitalize('word')).toEqual('Word');
  });

  it('does not change word starting with capital letter', () => {
    expect(capitalize('Word')).toEqual('Word');
  });

  it('only capitalizes the first letter of the string', () => {
    expect(capitalize('word word word')).toEqual('Word word word');
  });

  it('throws an error when the input is not a string', () => {
    expect(() => capitalize(123)).toThrow(TypeError('Invalid input'));
  });
});
