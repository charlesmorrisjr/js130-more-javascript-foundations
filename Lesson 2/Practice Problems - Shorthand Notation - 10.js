function func(args) {
  return {
    first: args[0],
    last: args[args.length - 1],
    middle: args.slice(1, -1).sort()
  };
}

let arr = ['abc', 'def', 'cde', 'efg', 'bcd'];
let { first, last, middle } = func(arr);

console.log(first);
console.log(last);
console.log(middle);