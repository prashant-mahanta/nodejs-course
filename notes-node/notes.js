const fs = require('fs');
var fetchNotes = () => {
	try{
		var notesString=fs.readFileSync('notes-data.json');
		return JSON.parse(notesString);

	}
	catch (e){
		return [];
	}
};

var saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};
var addNote = (title, body) => {
	// console.log('Adding note',title,body);
	var notes=fetchNotes();
	var note={
		title,
		body
	};

	//if file doesn't exist
	
	
	//to remove duplicates
	// var duplicateNote = notes.filter((note) => {
	// 	return note.title === title;
	// });
	var duplicateNote = notes.filter((note) => note.title === title);
	
	if(duplicateNote.length == 0){
		notes.push(note);
		saveNotes(notes);
		return note;
	}
	
};

var getAll = () => {
	return fetchNotes();
};

var readNotes = (title) => {
	var notes = fetchNotes();
	var note = notes.filter((note) => note.title === title);

	if(note.length !== 0){
		return note[0];
	}

};
var removeNote = (title) => {
	//fetch notes
	var notes = fetchNotes();
	var notesFiltered = notes.filter((note) => note.title !== title);
	saveNotes(notesFiltered);

	return notes.length !== notesFiltered.length;
	//filter notes removing the one with tile of argment
	//save new notes array
};

var logNote = (note) => {
	console.log(`Title: ${note.title} \n Body: ${note.body} \n -------------`);
};
module.exports = {
	addNote,// addNote: addNote(same)
	getAll,
	removeNote,
	readNotes,
	logNote
};