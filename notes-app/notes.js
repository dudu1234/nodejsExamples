const fs = require('fs')
const utils = require('./utils.js')

const addNote = (title, body) => {
    const notes = loadNotes();

    const duplicatedNote = notes.find(note => title === note.title)

    if (duplicatedNote) {
        utils.logWarning('note title taken')
        return
    }

    notes.push({
        title: title,
        body: body
    })

    saveNotes(notes)
}

const removeNote = (title) => {
    const notes = loadNotes();

    const allNotes = notes.filter(note => title !== note.title)

    if (notes.length === allNotes.length) {
        utils.logWarning('failed to find note title: ' + title)
        return
    }

    saveNotes(allNotes)
}

const notesList = () => {
    const list = loadNotes()
    utils.logSuccess(list)
    return list
}

const readNote = (title) => {
    const notes = loadNotes();

    const specifiedNote = notes.find(note => title === note.title)

    if (!specifiedNote) {
        utils.logWarning('failed to find note title: ' + title)
        return
    }

    utils.logSuccess(specifiedNote)
    return specifiedNote
}

const saveNotes = function (notes) {
    const notesStr = JSON.stringify(notes)
    fs.writeFileSync('notes.json', notesStr)
}

const loadNotes = function () {
    try {
        const dataJson = fs.readFileSync('notes.json').toString();
        return JSON.parse(dataJson);    
    } catch (e) {
        return []
    }
}

module.exports = { addNote, removeNote, readNote, notesList }