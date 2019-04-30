var validator = require('validator')
var yargs = require('yargs')
const utils = require('./utils.js')
const notes = require('./notes.js')

// node app.js add --title="note text" --body="note body"
yargs.command({
    command: 'add',
    describe: 'add new note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'get list of all notes',
    handler() {
        notes.notesList()
    }
})

yargs.command({
    command: 'read',
    describe: 'read note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()

// const command = process.argv[2];
// utils.log('command is: ' + command)
// if (command === 'add') {
//     utils.log(`title is: ${argv.title}`)
// } 

//const isValid = validator.isEmail('3434@eeee.com')

//utils.log(utils.logSuccess('success'))
//utils.log(utils.logError('error'))
//utils.log(utils.logWarning('warning'))
//utils.log(utils.chalk.white.bgBlue.bold('custom'))

//utils.log(process.argv[2])