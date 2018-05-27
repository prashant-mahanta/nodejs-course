const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleref = {
			describe: 'Title of Note',
			demand: true,
			alias: 't'
};
const bodyRef = {
			describe: 'Body of Note',
			demand: true,
			alias: 'b'
		};
const argv = yargs
	.command('add','Add a new note',{
		title: titleref,
		body: bodyRef
	})
	.command('list','List all the Notes')
	.command('read','read a note',{
		title: titleref
	})
	.command('remove','Remove a Note',{
		title: titleref
	})
	.help()
	.argv;

var command = argv._[0];//process.argv[2];
// console.log('Command: ', command);
// console.log('yargs ',argv);

if(command === 'add'){
	// console.log('adding new note');
	var note = notes.addNote(argv.title,argv.body);
	// console.log(note);
	if(note){
		console.log("-----------------");
		notes.logNote(note);
	}
	else{
		console.log("Note's title already taken");
	}

} else if(command === 'list'){
	
	var note = notes.getAll();
	console.log(`Number of Node(s) are: ${note.length}`);
	note.forEach((note) => notes.logNote(note));

} else if(command === 'remove'){
	var status = notes.removeNote(argv.title);
	var message = status ? 'Title is removed successfully' : 'Title is not present';

	console.log(message);

} else if(command === 'read'){
	var note = notes.readNotes(argv.title);
	// console.log(note);
	if(note){
		notes.logNote(note);
	}
	else{
		console.log(`Note with title ${argv.title} doesn't exist`);
	}
} else{
	console.log("Command not recognised");
}