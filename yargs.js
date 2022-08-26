const { string } = require('yargs');
const yargs = require('yargs');

yargs.version('1.0.0')
//Read command
const readCommand = {
    command : 'add',
    describe : 'add notes',
    builder : {
        title : {
            describe : 'notes tilte',
            demandOption : true,
            type : 'string'
        }
    },
    handler: (argv)=>{
        console.log('add notes in the file',argv)
    }
}

yargs.command(readCommand)
console.log(yargs.argv)

