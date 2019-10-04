const shell = require('shelljs');

console.log(shell.target);

// prints Hello world on terminal
shell.echo('Hello World');

// execute the node version command and print result
shell.exec('node --version');

console.log(shell.pwd().stdout);

// check if git is present or not
if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git');
  shell.exit(1);
} else {
  shell.exec('git --version');
}

console.log(shell.ls());

// to create directory
shell.mkdir('testing');

shell.cd('testing');
