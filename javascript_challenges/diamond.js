/*
Algo:

- Take input letter and determine length of diamond
  (A = 1, B = 2, etc.). This can be done using
  character code points
- Determine center position of diamond -- (length / 2)
- Two loops -- first half, then second half
  - First loop is ascending. Second is reverse/descending
  - For every iteration, add and subtract 1 to center position to determine
    positions for characters on that line. 

*/

class Diamond {
  static A_CHAR_CODE = 'A'.charCodeAt(0);
  
  static makeDiamond(finalLetter) {
    function makeRow(col) {
      let row = '';
      let curLetter = String.fromCharCode(Diamond.A_CHAR_CODE + col);
    
      for (let i = 0; i <= length; i++) {
        if ((i === center + col) || (i === center - col)) {
          row += curLetter;
        } else {
          row += ' ';
        }
      }
  
      return row + '\n';
    }

    let diamond = '';
    let length = (finalLetter.charCodeAt(0) - Diamond.A_CHAR_CODE) * 2;
    let center = Math.floor(length / 2);

    for (let col = 0; col < center; col++) {
      // diamond += '"' + makeRow(col) + '"';
      diamond += makeRow(col);
    }

    for (let col = center; col >= 0; col--) {
      // diamond += '"' + makeRow(col) + '"';
      diamond += makeRow(col);
    }
    return diamond;
  }
}

// console.log(Diamond.makeDiamond('A'));
// console.log(Diamond.makeDiamond('B'));
// console.log(Diamond.makeDiamond('C'));
// console.dir(Diamond.makeDiamond('E'));

module.exports = Diamond;