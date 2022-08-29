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
        },
        body : {
            describe : 'body',
            demandOption : true,
            type : 'string'
        },
    },
    handler: (argv)=>{
        console.log('title',argv.title)
        console.log('body',argv.body)

    }
}

yargs.command(readCommand)
//console.log(yargs.argv)
yargs.parse()

