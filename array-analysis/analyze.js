export default function analyze(array) {
  if (!Array.isArray(array) || array.some(x => typeof x !== 'number'))
    throw new TypeError('Invalid input');

  return {
    average: array.reduce((acc, curr) => acc + curr, 0) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length
  };
}
