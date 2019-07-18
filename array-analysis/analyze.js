function analyze(array) {
  return {
    average: array.reduce((acc, curr) => acc + curr, 0) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length
  };
}

module.exports = analyze;
