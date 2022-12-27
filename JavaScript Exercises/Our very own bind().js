let obj = {
  name: 'Teal',
};

function myBind(func, context) {
  return function(args) {
    return func.call(context, args);
  }
  // return (...args) => func.call(context, args);
}

function sayName(str) {
  console.log(this.name + str);
}

let newFunc = myBind(sayName, obj);

newFunc(' is here.');