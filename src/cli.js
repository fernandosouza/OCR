#!/usr/bin/env node
const fs = require('fs');
const OCR = require('./index');

fs.readFile(process.argv[2], 'utf8', (err, data) => {
  console.log(OCR(data));
});