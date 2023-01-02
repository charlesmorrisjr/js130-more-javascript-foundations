class BeerSong {
  static secondToLastVerse = "1 bottle of beer on the wall, 1 bottle of beer.\n" +
  "Take it down and pass it around, no more bottles of beer on the wall.\n\n";
  
  static lastVerse = "No more bottles of beer on the wall, no more " +
  "bottles of beer.\nGo to the store and buy some " +
  "more, 99 bottles of beer on the wall.\n";

  verse(verseStart, verseEnd) {
    if (verseEnd === undefined) {
      let bottles = verseStart;
      
      let songVerse = `${bottles} bottles of beer on the wall, ${bottles} bottles of beer.\n` +
      `Take one down and pass it around, ${bottles - 1} bottles of beer ` +
      `on the wall.\n`;

      return songVerse;
    }    
  }
}

let song = new BeerSong();

console.log(song.verse(99));

module.exports = BeerSong;