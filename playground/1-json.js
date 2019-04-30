const fs = require('fs')

const book = {
    title: 'book title',
    author: 'dudu'
}

const bookStr = JSON.stringify(book)
console.log(bookStr)
fs.writeFileSync('1-json.json', bookStr)

const dataBuffer = fs.readFileSync('1-json.json')
const fileStr = dataBuffer.toString()

const json = JSON.parse(fileStr)
console.log(json.author)

