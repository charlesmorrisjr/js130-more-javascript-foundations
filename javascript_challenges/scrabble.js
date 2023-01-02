class Scrabble {
  static LETTER_SCORE = {
    'AEIOULNRST': 1,
    'DG': 2,
    'BCMP': 3,
    'FHVWY': 4,
    'K': 5,
    'JX': 8,
    'QZ': 10,
  }
  
  constructor(word) {
    this.word = word;
  }

  static getScore(char) {
    for (let letters in Scrabble.LETTER_SCORE) {
      if (letters.includes(char)) {
        return Scrabble.LETTER_SCORE[letters];
      }
    }
    
    return 0;
  }
  
  static score(word) {
    // let wordScore = 0;
    // (word || '').split('').forEach(letter => wordScore += Scrabble.getScore(letter));
    // return wordScore;

    return (word || '').toUpperCase()
                       .split('')
                       .reduce((total, letter) => total += Scrabble.getScore(letter), 0);
  }

  score() {    
    return Scrabble.score(this.word);
  }
}

// let scrabble = new Scrabble(' ');
// console.log(scrabble.score());

module.exports = Scrabble;