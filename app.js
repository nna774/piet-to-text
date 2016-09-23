const loader = require('piet-loader');

const config = require('./config');

const colorTable = {
  lred: 'a',
  lyellow: 'b',
  lgreen: 'c',
  lcyan: 'd',
  lblue: 'e',
  lmagenta: 'f',

  red: 'g',
  yellow: 'h',
  green: 'i',
  cyan: 'j',
  blue: 'k',
  magenta: 'l',

  dred: 'm',
  dyellow: 'n',
  dgreen: 'o',
  dcyan: 'p',
  dblue: 'q',
  dmagenta: 'r',

  white: 'W',
  black: 'K',
};

if (process.argv.length < 3) {
  console.log('missing argument.');
  process.exit(-1);
}

function main(code) {
  for (const row of code) {
    console.log(row.map((c) => colorTable[c]).join(''));
  }
}

const filename = process.argv[2];

loader.load(filename, config.codel).then(main);
