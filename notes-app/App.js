import chalk from 'chalk'
import getNotes from './notes.js'
import yargs from 'yargs'



const command = process.argv[2]

console.log(command)

if (command === 'add') {
    console.log('Adding note!')
} else if (command === 'remove') {
    console.log('Removing note!')
}



