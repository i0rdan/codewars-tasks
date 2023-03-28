// https://www.codewars.com/kata/52223df9e8f98c7aa7000062

// I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it?
// According to Wikipedia, ROT13 is frequently used to obfuscate jokes on USENET.
// For this task you're only supposed to substitute characters. Not spaces, punctuation, numbers, etc.

function rot13(str) {
  const original = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const cipher = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM';
  return str.replace(/[a-z]/gi, l => cipher[original.indexOf(l)]);
}
