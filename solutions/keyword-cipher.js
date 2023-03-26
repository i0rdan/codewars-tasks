// https://www.codewars.com/kata/57241cafef90082e270012d8

// Third day at your new cryptoanalyst job and you come across your toughest assignment yet.
// Your job is to implement a simple keyword cipher.
// A keyword cipher is a type of monoalphabetic substitution where two parameters are provided as such (string, keyword).
// The string is encrypted by taking the keyword, dropping any letters that appear more than once.
// The rest of the letters of the alphabet that aren't used are then appended to the end of the keyword.

function keywordCipher(string, keyword) {
  const allLetters = 'abcdefghijklmnopqrstuvwxyz';
  const encryptionKeyArr = [...new Set(keyword + allLetters)];
  return string.toLowerCase()
    .split('')
    .map((el) => encryptionKeyArr[allLetters.indexOf(el)] || el)
    .join('');
}
