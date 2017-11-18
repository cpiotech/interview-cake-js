/**
 * https://www.interviewcake.com/question/javascript/reverse-words
 * 
 */
function reverseWords(str) {
  let chars = str.split('');
  reverse(chars, 0, chars.length - 1);
  let start = 0;
  for (let i = 1; i < chars.length; i++) {
    if (chars[i] === ' ') {
      reverse(chars, start, i - 1);
      start = i + 1;
    } else if (i === chars.length - 1) {
      reverse(chars, start, i);
    }
  }
  return chars.join('');
}
function reverse(chars, start, end) {
  for (let i = 0; i < parseInt((end - start + 1) / 2); i++) {
    let temp = chars[start + i];
    chars[start + i] = chars[end - i];
    chars[end - i] = temp;
  }  
}
const message = 'find you will pain only go you recordings security the into if';
console.log(reverseWords(message));