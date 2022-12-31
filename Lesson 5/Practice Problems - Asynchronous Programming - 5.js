function sayHi() {
  console.log('Hi');
}

function afterNSeconds(callback, seconds) {
  setTimeout(callback, seconds * 1000);
}

afterNSeconds(sayHi, 3);