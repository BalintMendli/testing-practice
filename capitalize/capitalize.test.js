const capitalize = require('./capitalize');

describe('Capitalize', function() {
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
});
