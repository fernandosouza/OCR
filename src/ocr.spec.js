const OCR = require("./index");

it("should be able to identify numbers from 0 to 9", () => {
  const string = `
 _     _  _     _  _  _  _  _ 
| |  | _| _||_||_ |_   ||_||_|
|_|  ||_  _|  | _||_|  ||_| _|
`;
  expect(OCR(string)).toBe("0123456789");
});

it("should be able to identify digits in multiple lines", () => {
  const string = `
 _     _  _     _  _  _  _  _ 
| |  | _| _||_||_ |_   ||_||_|
|_|  ||_  _|  | _||_|  ||_| _|
 _     _  _     _  _  _  _  _ 
| |  | _| _||_||_ |_   ||_||_|
|_|  ||_  _|  | _||_|  ||_| _|
`;
  expect(OCR(string)).toBe("0123456789\n0123456789");
});
