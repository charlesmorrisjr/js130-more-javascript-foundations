let obj = {
  name: 'Teal',
};

function myBind(func, context, firstArg) {
  return function(secondArg) {
    return func.call(context, firstArg, secondArg);
  }
  // return (...args) => func.call(context, args);
}

function sayName(str1, str2) {
  console.log(this.name + str1 + str2);
}

let newFunc = myBind(sayName, obj, firstArg);

newFunc(' Hooray!');