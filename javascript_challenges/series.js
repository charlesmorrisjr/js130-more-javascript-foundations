class Series {
  constructor(digits) {
    this.digits = digits;
  }

  slices(numSlices) {
    if (numSlices > this.digits.length) throw new Error('Slice larger than length of digits.');

    let arr = [];
    
    for (let start = 0; start <= this.digits.length - numSlices; start++) {
      let sliceArr = [];
      for (let i = 0; i < numSlices; i++) {
        sliceArr.push(Number(this.digits[start + i]));
      }
      arr.push(sliceArr);
    }

    return arr;
  }
}

module.exports = Series;