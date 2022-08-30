const yargs = require('yargs');
const notes = require('./notes.js')
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
        },
        body : {
            describe : 'body',
            demandOption : true,
            type : 'string'
        },
    },
    handler: (argv)=>{
        notes.addNote(argv.title,argv.body)
    }
}

yargs.command(readCommand)
yargs.parse() //console.log(yargs.argv)

