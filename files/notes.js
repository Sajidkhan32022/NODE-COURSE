const fs = require('fs')

const getNotes = function(){
    return loadNotes()
};

/*const addNotes = function(title, body){
    notes = loadNotes()
    notes.push({
        'title' : title,
        'body' : body
    })
    return saveNotes(notes)
}*/

const addNote = function (title, body) {
    const notes = loadNotes()
    //console.log(notes)
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            'title': title,
            'body': body
        })
        return saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log('Note title taken!')
    }
}

const saveNotes = function(notes){
    let notesData = JSON.stringify(notes)
    let writeData = fs.writeFileSync('./notes.json',notesData)
    return writeData
}

const loadNotes = function(){
    try{
        let dataBuffer = fs.readFileSync('./notes.json')
        let dataJSON = dataBuffer.toString()
        let dataParse = JSON.parse(dataJSON)
        return dataParse
    }catch(err){
        return {}
    }
}

module.exports = {
    getNotes,
    addNote
}
 