var somePromise = new Promise((resolve, reject) => {

	setTimeout(() => {
		// resolve("Hi! it worked");

		reject("Unable to fulfill promise");
	}, 2500);
	
});

somePromise.then((message) => {
	console.log("Success: ", message);
}, (errorMessage) => {
	console.log("Error: ", errorMessage);
})