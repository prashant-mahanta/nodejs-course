console.log("Starting App..");

setTimeout(() => {
	console.log("Time To wait");
}, 2000);

setTimeout(() => {
	console.log("One sec");
}, -1);

console.log("Closing App");