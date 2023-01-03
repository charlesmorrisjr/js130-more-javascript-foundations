class BeerSong {
  static thirdToLastVerse = "2 bottles of beer on the wall, 2 bottles of beer.\n" +
  "Take one down and pass it around, 1 bottle of beer " +
  "on the wall.\n";

  static secondToLastVerse = "1 bottle of beer on the wall, 1 bottle of beer.\n" +
  "Take it down and pass it around, no more bottles " +
  "of beer on the wall.\n";  

  static lastVerse = "No more bottles of beer on the wall, no more " +
  "bottles of beer.\nGo to the store and buy some " +
  "more, 99 bottles of beer on the wall.\n";

  static verse(bottles) {
    if (bottles > 2) {
      return `${bottles} bottles of beer on the wall, ${bottles} bottles of beer.\n` +
      `Take one down and pass it around, ${bottles - 1} bottles of beer ` +
      `on the wall.\n`;
    } else if (bottles === 2) {
      return BeerSong.thirdToLastVerse;
    } else if (bottles === 1) {
      return BeerSong.secondToLastVerse;
    } else if (bottles === 0) {
      return BeerSong.lastVerse;
    }
  }

  static verses(verseStart, verseEnd) {
    let songVerse = '';

    for (let bottles = verseStart; bottles >= verseEnd; bottles--) {
      songVerse += BeerSong.verse(bottles);

      if (bottles !== verseEnd) {
        songVerse += '\n';
      }
    }

    return songVerse;
  }

  static lyrics() {
    return BeerSong.verses(99, 0);
  }
}

// console.log(BeerSong.verse(99));
// console.log(BeerSong.verse(99, 98));

module.exports = BeerSong;