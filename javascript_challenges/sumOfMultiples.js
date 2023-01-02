class SumOfMultiples {
  constructor(...nums) {
    this.divisors = [...nums];
  }
  
  static to(num, divisors = [3, 5]) {
/*    
    let sum = 0;

    for (let i = 1; i < num; i++) {
      for (let div of divisors) {
        if (i % div === 0) {
          sum += i;
          break;
        }
      }
    }

    return sum;
*/
    let multiples = [0];
    
    for (let div of divisors) {
      for (let i = div; i < num; i += div) {
        if (!multiples.includes(i)) multiples.push(i);
      }
    }

    return multiples.reduce((total, accum) => total + accum);
  }

  to(num) {
    return SumOfMultiples.to(num, this.divisors);
  }
}

// let obj = new SumOfMultiples(7, 13, 17);
// console.log(obj.to(20));

// console.log(SumOfMultiples.to(100));

module.exports = SumOfMultiples;