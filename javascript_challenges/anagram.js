/*
match():

Rules:
- Input is array of words
- Matches are case-insensitive
- Both words must have the exact same letters
- No matches returns empty array
- Identical word is not anagram
- Return array

Algorithm:

*/

class Anagram {
  constructor(word) {
    this.word = word;
  }

  match(words) {
    return words.filter(word => {
      let word1 = this.word.toLowerCase();
      let word2 = word.toLowerCase();

      if (word1 === word2 || word1.length !== word2.length) return false;

      return word2.split('').every(letter => {
        let regEx = new RegExp(letter, 'g');
        return (word1.match(regEx) || []).length === (word2.match(regEx) || []).length;
      });
    });
  }
}

module.exports = Anagram;