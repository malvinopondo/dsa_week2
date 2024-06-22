function isValid(s) {
   
    const sameBracket = {
        ')': '(',
        '}': '{',
        ']': '['
    };
  
    const stack = [];

    for (let char of s) {
        if (Object.values(sameBracket).includes(char)) {
            
            stack.push(char);
        } else if (Object.keys(sameBracket).includes(char)) {
            
            if (stack.length === 0 || sameBracket[char] !== stack.pop()) {
                return false;
            }
        } else {
     
            return false;
        }
    }

    return stack.length === 0;
}

console.log(isValid("()"));        // Output: true
console.log(isValid("()[]{}"));    // Output: true
console.log(isValid("(]"));        // Output: false
console.log(isValid("([)]"));      // Output: false
console.log(isValid("{[]}"));      // Output: true
