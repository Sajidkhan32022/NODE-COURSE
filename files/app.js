const yargs = require('yargs');
const notes = require('./notes.js')

yargs.version('1.0.0')
//add command
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

// list /read commond 
const listCommand = {
    command : 'list',
    describe : 'list notes',
    builder : {
        title : {
            describe : 'notes lists',
            demandOption : false,
            type : 'string'
        },
        body : {
            describe : 'body',
            demandOption : false,
            type : 'string'
        },
    },
    handler: ()=>{
        notes.listNotes()
    }
}
yargs.command(listCommand)

yargs.parse() //console.log(yargs.argv)

