function caesar(text, shift = 1) {
  const encryptedArr = [];
  for (let i = 0; i < text.length; i++) {
    encryptedArr.push(encryptChar(text.charCodeAt(i), shift));
  }
  return String.fromCharCode(...encryptedArr);
}

function encryptChar(charCode, shift) {
  if (charCode >= 65 && charCode <= 90) {
    return ((charCode - 65 + shift) % 26) + 65;
  }
  if (charCode >= 97 && charCode <= 122) {
    return ((charCode - 97 + shift) % 26) + 97;
  }
  return charCode;
}

module.exports = caesar;
