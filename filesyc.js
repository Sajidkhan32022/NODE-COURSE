const fs = require('fs')
fs.writeFileSync('./notes/notes.txt','My name is Sajid. I live in Lahore.')
try {
    fs.appendFileSync('./notes/notes.txt', 'i am Computer systems Engineer');
    console.log('The "data to append" was appended to file!');
} catch (err) {
    console.log(err)
}