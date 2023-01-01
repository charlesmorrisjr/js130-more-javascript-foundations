function newStack() {
  let stack = [];

  return {    
    push: (element) => stack.push(element),
    pop: () => stack.pop(),
    printStack: () => stack.forEach(element => console.log(element)),
  };
}

let myStack = newStack();

myStack.push(1);
myStack.push('a');
myStack.push(2);

console.log(myStack.pop());
console.log(myStack.pop());

myStack.push(3);

console.log('');

myStack.printStack();