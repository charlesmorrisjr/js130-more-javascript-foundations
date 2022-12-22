"use strict";

let arr = [1, 2, 3, 4];

function forEach(arr, callback, thisArg) {
  let arrLen = arr.length;
  
  for (let idx = 0; idx < arrLen; idx++) {
    callback.call(thisArg, arr[idx], idx, arr);
  }
}

// Array.prototype.forEach
arr.forEach(value => console.log(value * value));

// Our forEach function
forEach(arr, value => console.log(value * value));


// Defining The Execution Context

console.log('');

class Foo {
  constructor(prefix) {
    this.prefix = prefix;
  }

  showItem(item) {
    console.log(this.prefix, item);
  }
}

let foo = new Foo("Item: ");
[1, 2, 3].forEach(foo.showItem, foo);
// [4, 5, 6].forEach(foo.showItem);

forEach([1, 2, 3], foo.showItem, foo);
// forEach([4, 5, 6], foo.showItem);


// Adding The Index And Array Arguments

console.log('');

["a", "b", "c"].forEach(function(value, index, arr) {
  console.log(`After ${value} comes ${arr[index + 1]}`);
});

forEach(["a", "b", "c"], function(value, index, arr) {
  console.log(`After ${value} comes ${arr[index + 1]}`);
});