// var bar = 82;

// function foo() {
//   let bar = bar - 42;
//   console.log(bar);
// }

// foo();


// Async fun 
// TDZ
// Rest / Spread syntax
// 

///
var otherMessage = "goodbye"
///
let message = "hello"
/// 


// For var-delcared variables, the JS engine 'takes note of' the identifer name and initializes the value to `undefined`. 
// For let/const-declared variables, the JS engine 'takes note of' the identifer name. 

// -------------------------------
// var / function sharing same name. 
// 

// -------------------------------
// Rest / Spread syntax

// var foo = 10;

// function bar() {
//   foo = 20;
//   console.log(foo);
// }

// bar();
// console.log

// // hoisted version
// function bar() {
//   var foo = 20;
//   console.log(foo);
// }

// var foo;
// foo = 10;

// We are accessing `foo` on line 35. 
// JS will look in `bar` scope for `foo` identifier. 

// var bar = 82;

// function foo() {
//   let bar = bar - 42;
//   console.log(bar);
// }

// foo();

// line 49 
// 1: bar - 42 -> What is `bar`? -> `bar` is `undefined`
// Because `undefined` - 42 = `NaN`, `NaN` gets stored in local `bar`

// Creation Phase - JS only cares about defining scopes and associating identifiers. 
//  - global scope -> `foo`, `bar` 
//  - `foo` scope  -> `bar`


function bar() {
  // console.log(foo);
  if (foo > 20) {
    let foo = foo - 50; // line 5
    console.log(foo);
  }

  console.log(foo); // line 8
  // foo += 10;
}

bar(); // undefined
var foo = 30;
bar(); // 30





// Explain in terms of hoisting and creation and execution phase