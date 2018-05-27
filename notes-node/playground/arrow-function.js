var person = {
	name: 'Prashant',
	sayHi: () => {
		console.log(arguments);
		console.log(`Hi ${this.name}`);
	},

	sayHiAlt () {
		console.log(arguments);
		console.log(`Hi ${this.name}`);
	}
};

person.sayHi();
person.sayHiAlt(); 

person.sayHi(1,2,3);
person.sayHiAlt(1,2,3);