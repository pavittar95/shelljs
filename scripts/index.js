const shelljs = require('shelljs');

shelljs.echo('Hello World');

// console.log(shelljs);

var a = shelljs.exec('node --version');

console.log(a);
