import analyze from './analyze';

const arr = [0, 1, 2, 3];

describe('analyze', () => {
  it('is a function', () => {
    expect(typeof analyze).toEqual('function');
  });

  it('returns an object', () => {
    expect(typeof analyze(arr)).toEqual('object');
  });

  it('has an average property', () => {
    expect(analyze(arr)).toHaveProperty('average');
  });

  it('calculates the average of the array', () => {
    expect(analyze(arr).average).toEqual(1.5);
  });

  it('has a min property', () => {
    expect(analyze(arr)).toHaveProperty('min');
  });

  it('calculates the minimum value from the array', () => {
    expect(analyze(arr).min).toEqual(0);
  });

  it('has a max property', () => {
    expect(analyze(arr)).toHaveProperty('max');
  });

  it('calculates the maximum value from the array', () => {
    expect(analyze(arr).max).toEqual(3);
  });

  it('has a length property', () => {
    expect(analyze(arr)).toHaveProperty('length');
  });

  it('calculates the length of the array', () => {
    expect(analyze(arr).length).toEqual(4);
  });

  it('returns an object with all the values', () => {
    expect(analyze(arr)).toEqual({
      average: 1.5,
      min: 0,
      max: 3,
      length: 4
    });
  });

  it('throws an error when the input is invalid', () => {
    expect(() => analyze(1, 2)).toThrow(TypeError('Invalid input'));
    expect(() => analyze([0, 'a', 2, 3])).toThrow(TypeError('Invalid input'));
    expect(() => analyze()).toThrow(TypeError('Invalid input'));
  });
});
