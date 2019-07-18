const caesar = require('./caesar');

describe('Caesar', function() {
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
});
