function foo(condition) {
  console.log(bar);

  qux = 0.5772;

  if (condition) {
    let qux = 3.1415;
    console.log(qux);
  } else {
    let bar = 24;

    let xyzzy = function() {
      let qux = 2.7183;
      console.log(qux);
    };

    console.log(qux);
    console.log(xyzzy());
  }

  qux = 42;
  console.log(qux);
}

foo(true);
foo(false);