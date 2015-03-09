var fs = require('fs');
var inp = fs.readFileSync(process.argv[2]).toString();
var lineNumb = +inp.split('\n').length -1;
console.log(lineNumb);
