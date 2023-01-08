const obj = {
  first: "I am the first",
  second: "I am the second",
  third: [1, 2, 3],
  rest: { a: 'a', b: 'b' },
};

const first = obj.first;
const second = obj.second;
const rest = {
  third: obj.third,
  rest: obj.rest,
}

console.log(rest);