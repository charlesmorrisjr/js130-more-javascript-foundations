class PerfectNumber {
  static classify(num) {
    if (num < 0) throw new Error('Number cannot be negative.');
    
    let aliquot = 1;
    
    for (let i = 2; i < num; i++) {
      if (num % i === 0) aliquot += i;
    }
    
    if (aliquot > num) {
      return 'abundant';
    } else if (aliquot === num) {
      return 'perfect';
    } else if (aliquot < num) {
      return 'deficient';
    }
  }
}

module.exports = PerfectNumber;