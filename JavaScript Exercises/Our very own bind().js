let obj = {
  name: 'Teal',
};

function myBind(func, context) {
  return function() {
    return func.call(context, ...arguments);
  }
  // return (...args) => func.call(context, args);
}

function sayName(str) {
  console.log(`${this.name} ${str}`);
}

let newFunc = myBind(sayName, obj);

newFunc('is here.');