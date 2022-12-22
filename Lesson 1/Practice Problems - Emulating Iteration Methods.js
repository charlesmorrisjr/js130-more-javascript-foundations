"use strict";

function forEach(arr, callback, thisArg) {
  let arrLen = arr.length;
  
  for (let idx = 0; idx < arrLen; idx++) {
    callback.call(thisArg, arr[idx], idx, arr);
  }
}

function filter(arr, callback, thisArg) {
  let arrLen = arr.length;
  let newArr = [];
  
  for (let idx = 0; idx < arrLen; idx++) {
    if (callback.call(thisArg, arr[idx], idx, arr)) {
      newArr.push(arr[idx]);
    };
  }

  return newArr;
}

function map(arr, callback, thisArg) {
  let arrLen = arr.length;
  let newArr = [];
  
  for (let idx = 0; idx < arrLen; idx++) {
    newArr.push(callback.call(thisArg, arr[idx], idx, arr));
  }

  return newArr;
}

function reduce(arr, callback, initVal, thisArg) {
  let arrLen = arr.length;
  let total, startIdx;

  if (initVal === undefined) {
    total = arr[0];
    startIdx = 1;
  } else {
    total = initVal;
    startIdx = 0;
  }

  for (let idx = startIdx; idx < arrLen; idx++) {
    total = callback.call(thisArg, total, arr[idx], idx, arr);
  }

  return total;
}

// Basic Emulation Problems
let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]

console.log('');

numbers = [1, 2, 3, 4, 5];
console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
console.log(map(numbers, () => false));
// => [ false, false, false, false, false ]

values = [1, "abc", null, true, undefined, "xyz"];
console.log(map(values, value => String(value)));
// => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]


// Emulating and Using the reduce Method

console.log('');

numbers = [1, 2, 3, 4, 5];
console.log(reduce(numbers, (accum, number) => accum + number));   // => 15
console.log(reduce(numbers, (prod, number) => prod * number));     // => 120
console.log(reduce(numbers, (prod, number) => prod * number, 3));  // => 360
console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
console.log(reduce([], (accum, number) => accum + number));
// => undefined

let stooges = ["Moe", "Larry", "Curly"];
console.log(reduce(stooges, (reversedStooges, stooge) => {
  reversedStooges.unshift(stooge);
  return reversedStooges;
}, []));
// => ["Curly", "Larry", "Moe"]

console.log('');

function filterReduce(arr, callback) {
  return arr.reduce((total, accum) => {
    if (callback(accum)) {
      total.push(accum);
    }
    return total;
  }, []);
}

numbers = [1, 2, 3, 4, 5];
console.log(filterReduce(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filterReduce(numbers, number => number < 0)); // => []
console.log(filterReduce(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

values = [1, "abc", null, true, undefined, "xyz"];
console.log(filterReduce(values, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]

console.log('');

function mapReduce(arr, callback) {
  return arr.reduce((total, accum) => {
    total.push(callback(accum));
    return total;
  }, []);
}

numbers = [1, 2, 3, 4, 5];
console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
console.log(map(numbers, () => false));
// => [ false, false, false, false, false ]

values = [1, "abc", null, true, undefined, "xyz"];
console.log(map(values, value => String(value)));
// => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]