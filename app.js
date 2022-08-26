const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const utils = require('./utils.js');
console.log(validator.isEmail(utils.email));
console.log(validator.isURL(utils.url));
console.log(chalk.blue('Hello world!'));
const command = process.argv[2]
if(command === 'Run'){
    console.log('run the appliction')
}else{
    console.log('stop')
}
console.log(yargs.argv)