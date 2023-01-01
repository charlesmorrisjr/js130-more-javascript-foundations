/* Algorithm

1024 / 1000 = 1 => M
24 / 100 = 0
24 / 10 = 2 => XX
4 / 4 = 1 => IV

93 / 100 = 0
93 / 90 = 1 => XC
3 / 1 = 3 => III

73 / 50 = 1 => L
23 / 10 = 2 => X
13 / 10 = 1 


- Declare and initialize empty string variable 'romanNum'
- Iterate through list of roman numbers (ROMAN_NUMERALS)
- Copy input number to `num`
- For every iteration, check if `num` divided by the
  value of the roman numeral at the current iteration and rounded down
  to the nearest integer is greater than 0. Assign that number to `times`
  - If so, concatenate the current roman numeral to `romanNum` so many `times`
  - Subtract the value of that roman number from `num`
- Return `romanNumeral`
*/

class RomanNumeral {
  static ROMAN_NUMERALS = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  }

  static SORTED_ROMAN_NUMERALS = Object.entries(RomanNumeral.ROMAN_NUMERALS).sort((a, b) => b[1] - a[1]);

  constructor(number) {
    this.number = number;
  }

  toRoman() {
    let romanNum = '';
    let num = this.number;

    RomanNumeral.SORTED_ROMAN_NUMERALS.forEach(prop => {
      let times = Math.floor(num / prop[1]);
      if (times > 0) {
        romanNum += prop[0].repeat(times);
        num -= prop[1] * times;
      }
    });

    return romanNum;
  }
}

module.exports = RomanNumeral;