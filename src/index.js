const testString = `
    _  _     _  _  _  _  _ 
  | _| _||_||_ |_   ||_||_|
  ||_  _|  | _||_|  ||_| _|
    _  _  _  _  _  _     _ 
|_||_|| || ||_   |  |  ||_ 
  | _||_||_||_|  |  |  | _|
`;

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

function groupLinesOfCharacters(lines) {
  const linesToFormAnCharacter = 3;
  let currentCharacterIndex = 0;

  return lines.reduce((result, currentValue) => {
    if (
      result[currentCharacterIndex] &&
      result[currentCharacterIndex].length === linesToFormAnCharacter
    ) {
      currentCharacterIndex++;
    }
    (result[currentCharacterIndex] = result[currentCharacterIndex] || []).push(
      currentValue
    );
    return result;
  }, []);
}

function OCR(string) {
  return groupLinesOfCharacters(extractLinesFromString(string))
    .map((readableLine) => {
      return mountCharacter(readableLine)
        .map((a) => findCharacter(a))
        .join("");
    })
    .join("\n");
}

console.log(OCR(testString));
