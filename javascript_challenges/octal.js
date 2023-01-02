class Octal {
  constructor(str) {
    this.octalStr = str;
  }

  toDecimal() {
    if (/[^0-7]/gi.test(this.octalStr)) return 0;
    return this.octalStr.split('')
                        .reverse()
                        .reduce((octalNum, curNum, idx) => octalNum + (Number(curNum) * (8 ** idx)), 0);
  }
}

module.exports = Octal;