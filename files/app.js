const yargs = require('yargs');
const chalk = require('chalk');
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

// remove commond 
const rmoveCommand = {
    command : 'remove',
    describe : 'remove notes',
    builder : {
        title : {
            describe : 'notes tilte',
            demandOption : true,
            type : 'string'
        },
        body : {
            describe : 'body',
            demandOption : false,
            type : 'string'
        },
    },
    handler: (argv)=>{
        notes.removeNotes(argv.title)
    }
}
yargs.command(rmoveCommand)

yargs.parse() //console.log(yargs.argv)

