function firstWord(s) {
  if (!s || !s.includes(' ')) {
    return s;
  }
  return s.split(' ')[0];
}
// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
