const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather');


const argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			describe: 'Address ti fetch weather for',
			string: true
		}

})
.help()
.alias('help','h')
.argv;

// console.log(argv);
//use double quotes in the command line otherwise will get error
geocode.geocodeAddress(argv.address, (errorMessage, results) => {
		if(errorMessage){
			console.log(errorMessage);
		} else{
			console.log(results.address);
			weather.getWeather(results.Latitude, results.Longitude, (errorMessage, resultWeather) => {
				if(errorMessage){
					console.log(errorMessage);
				} else{
					console.log(`It's currently ${resultWeather.temperature}. It feels like ${resultWeather.apparentTemperature}`);
				}
			});

		}
});

// forecast.io key::  9af51d7d0aeb7a2214d41ea72fde0695



