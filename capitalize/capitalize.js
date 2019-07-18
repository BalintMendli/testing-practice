function capitalize(string) {
  const firstLetter = string.charAt(0);
  const rest = string.slice(1);
  return firstLetter.toUpperCase() + rest;
}

module.exports = capitalize;
