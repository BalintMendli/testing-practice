const analyze = require('./analyze');

describe('Analyze', function() {
  it('is a function', () => {
    expect(typeof analyze).toEqual('function');
  });

  it('returns an object', () => {
    expect(typeof analyze([0, 1, 2, 3])).toEqual('object');
  });

  it('calculates the average of the array', () => {
    expect(analyze([0, 1, 2, 3]).average).toEqual(1.5);
  });

  it('calculates the minimum value from the array', () => {
    expect(analyze([0, 1, 2, 3]).min).toEqual(0);
  });

  it('calculates the maximum value from the array', () => {
    expect(analyze([0, 1, 2, 3]).max).toEqual(3);
  });

  it('calculates the length of the array', () => {
    expect(analyze([0, 1, 2, 3]).length).toEqual(4);
  });

  it('returns an object with all the values', () => {
    expect(analyze([0, 1, 2, 3])).toEqual({
      average: 1.5,
      min: 0,
      max: 3,
      length: 4
    });
  });
});
