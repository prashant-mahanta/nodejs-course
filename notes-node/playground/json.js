// var obj = {
// 	name: 'Andrew'
// };
// var stringObj = JSON.stringify(obj); //make object to string
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Andrew" , "age": 23}';
// var person = JSON.parse(personString); // make string to object
// console.log(typeof person);
// console.log(person);


const fs = require('fs');

var originalNote = {
	title: 'Some title',
	body: 'Some body'
};
//originalNoteString
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json',originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);