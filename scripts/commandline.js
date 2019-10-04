const shell = require('shelljs');
var readline = require('readline');

const createTerminalStream = () =>
  readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });

const readFromTerminal = callback => {
  const rl = createTerminalStream();
  rl.on('line', cmd => {
    callback(cmd);
    rl.close();
  });
};

const gitAdd = () => {
  shell.exec('git add -A', { slient: true }, (code, stdout, stderr) => {
    if (code) throw stderr;
    if (parseFloat(stdout) < 3) {
      throw new Error('[ERROR: not able to add files');
      process.exit(1);
    } else {
      gitCommit();
    }
  });
};

const gitCommit = () => {
  console.log('Enter Commit Message:');
  readFromTerminal(msg => {
    shell.exec(
      `git commit -m "${msg}"`,
      { slient: true },
      (code, stdout, stderr) => {
        if (code) throw stderr;
        if (parseFloat(stdout) < 3) {
          throw new Error('[ERROR: not able to commit changes');
          process.exit(1);
        } else {
          gitPush();
        }
      }
    );
  });
};

const gitPush = () => {
  console.log('Enter Branch Name:');
  readFromTerminal(msg => {
    shell.exec(
      `git push origin ${msg.trim()}`,
      { slient: true },
      (code, stdout, stderr) => {
        if (code) throw stderr;
        if (parseFloat(stdout) < 3) {
          throw new Error('[ERROR: not able to push your changes');
          process.exit(1);
        }
      }
    );
  });
};

const init = () => {
  gitAdd();
};

init();
