let obj = {
  name: 'Teal',
};

function myBind(func, context) {
  let firstArgs = ([...arguments].slice(2));
  return (...args) => func.call(context, ...firstArgs, ...args);
}

// function myBind(func, context) {
//   let firstArgs = ([...arguments].slice(2));
//   return function() {
//     let secondArgs = ([...arguments].slice(0));
//     return func.call(context, ...firstArgs, ...secondArgs);
//   }
// }

// function myBind(func, context, ...args) {
//   return function() {
//     func.call(context, ...args, ...arguments);
//   }
// }

function sayName(...str) {
  console.log(`${this.name} ${[...str].join(' ')}`);
}

let newFunc = myBind(sayName, obj, 'wants', 'to say' );

newFunc('Hooray!', 'Hi!');