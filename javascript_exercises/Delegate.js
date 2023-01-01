let foo = {
  name: 'test',
  bar: function(...greeting) {
    console.log(greeting.join(' ') + ' ' + this.name);
  },
};

let baz = {
  qux: delegate(foo, 'bar', 'hello', 'there'),
};

function delegate(obj, method, ...args) {
  return function() {
    obj[method](...args);
  };
}

baz.qux();   // logs 'hello test';

foo.bar = function() { console.log('changed'); };

baz.qux();          // logs 'changed'