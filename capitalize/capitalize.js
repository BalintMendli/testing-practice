export default function capitalize(string) {
  if (!string || string.constructor !== String)
    throw new TypeError('Invalid input');
  const firstLetter = string.charAt(0);
  const rest = string.slice(1);
  return firstLetter.toUpperCase() + rest;
}
