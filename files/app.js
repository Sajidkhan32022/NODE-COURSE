const yargs = require('yargs');
const notes = require('./notes.js')

yargs.version('1.0.0')
//add command
const addCommand = {
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
yargs.command(addCommand)

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

// list commond 
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

//read command
const readCommand = {
    command : 'list',
    describe : 'list notes',
    builder : {
        title : {
            describe : 'notes lists',
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
        notes.readNotes(argv.title)
    }
}
yargs.command(readCommand)

yargs.parse() //console.log(yargs.argv)

