This is an OCR simulation built using JavaScript which takes a multiline string containing digits in a format described in an example bellow, and prints the recognized numbers in the console.

## Requirements

This project was built on Node version 10.16. Therefore, it requires at least this Node version to run.

## Running the application

1 - Run `npm install` in your terminal to install all the dependencies.

2 - Run `node ./src/cli.js [filepath]`. However, the project already has a .txt file as an example. You can simply run `npm run example` or `node ./src/cli.js  ./src/text.txt` to see the example output.

## Example

Giving the following file content:

```
    _  _     _  _  _  _  _ 
  | _| _||_||_ |_   ||_||_|
  ||_  _|  | _||_|  ||_| _|
 _  _  _  _ 
 _|| | _|| |
|_ |_||_ |_|
```

The program output should be:

```
123456789
2020
```
