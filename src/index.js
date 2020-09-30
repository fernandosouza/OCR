const fs = require('fs');

const digitDictionary = [
  [" _ ", "| |", "|_|"],
  ["   ", "  |", "  |"],
  [" _ ", " _|", "|_ "],
  [" _ ", " _|", " _|"],
  ["   ", "|_|", "  |"],
  [" _ ", "|_ ", " _|"],
  [" _ ", "|_ ", "|_|"],
  [" _ ", "  |", "  |"],
  [" _ ", "|_|", "|_|"],
  [" _ ", "|_|", " _|"],
];

/*
 * Takes an string and returns an arry with its lines
 */
function extractLinesFromString(string) {
  return string.split(/\n/).filter((line) => !!line);
}

function findCharacter(character) {
  return digitDictionary.findIndex((char) => {
    return (
      char[0] === character[0] &&
      char[1] === character[1] &&
      char[2] === character[2]
    );
  });
}

/*
 * Takes an text line and extracts characters from a character segment.
 */
function mountCharacter(lines) {
  const characters = [];
  lines.forEach((line) => {
    line.match(/.{1,3}/g).forEach((group, index) => {
      if (!characters[index]) {
        characters[index] = [];
      }
      characters[index].push(group);
    });
  });
  return characters;
}

/*
 * Takes a string and extract lines which contain characters.
 * Each line is represented as an array.
 * [[line1], [line2]]
 * Each line has an array which each item of it represents an character segment.
 * [characterSegment,characterSegment, characterSegment]
 */
function findLinesOfCharacters(string) {
  const linesToFormAnCharacter = 3;
  let currentCharacterIndex = 0;

  return extractLinesFromString(string).reduce((result, currentValue) => {
    (result[currentCharacterIndex] = result[currentCharacterIndex] || []).push(
      currentValue
    );
    if (result[currentCharacterIndex].length === linesToFormAnCharacter) {
      currentCharacterIndex++;
    }
    return result;
  }, []);
}

function OCR(string) {
  return findLinesOfCharacters(string)
    .map((readableLine) => {
      return mountCharacter(readableLine)
        .map((character) => findCharacter(character))
        .join("");
    })
    .join("\n");
}

fs.readFile(process.argv[2], 'utf8', (err, data) => {
  console.log(OCR(data));
});
