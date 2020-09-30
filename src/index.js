const a = `
    _  _     _  _  _  _  _ 
  | _| _||_||_ |_   ||_||_|
  ||_  _|  | _||_|  ||_| _|
    _  _  _  _  _  _     _ 
|_||_|| || ||_   |  |  ||_ 
  | _||_||_||_|  |  |  | _|
`;

const lines = a.split(/\n/).filter((line) => !!line);

const one = ["   ", "  |", "  |"];
const zero = ["___", "| |", "___"];

const dictionary = [
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

function findCharacter(character) {
  return dictionary.findIndex((char) => {
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

// console.log(groupLinesOfCharacters(lines))

// const readableLines = [
//   [lines[0], lines[1], lines[2]],
//   [lines[3], lines[4], lines[5]],
// ];

// console.log(readableLines);

console.log(
  groupLinesOfCharacters(lines)
    .map((readableLine) => {
      return mountCharacter(readableLine)
        .map((a) => findCharacter(a))
        .join("");
    })
    .join("\n")
);

// console.log(lines, "?");

// [
//   [0,0,0],
//   [0,0,0],
//   [0,0,0]
// ]

// console.log(
//   [findCharacter(one), findCharacter(mountCharacter(readableLines)[0])].join("")
// );
// console.log([findCharacter(one), findCharacter(mountCharacter(readableLines)[0])].join(""));
