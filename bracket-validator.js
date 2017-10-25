// https://www.interviewcake.com/question/javascript/bracket-validator
function bracketValidator(str) {
  const opens = '([{';
  const closes = ')]}';
  const mapping = {
    ")": "(",
    "]": "[",
    "}": "{"
  };
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let c = str[i];
    if (opens.indexOf(c) > -1) {
      stack.push(c);
    } else {
      if (closes.indexOf(c) > -1) {
        let open = stack.pop();
        if (open !== mapping[c]) return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(bracketValidator('{ [ ] ( ) }'));
console.log(bracketValidator('{ [ ( ] ) }'));
console.log(bracketValidator('{ [ }'));