export default function reverse(string) {
  if (!string || string.constructor !== String)
    throw new TypeError('Invalid input');

  return string
    .split('')
    .reverse()
    .join('');
}
