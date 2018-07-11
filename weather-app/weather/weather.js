const request = require('request');

var getWeather = (lat, lng, callback) => {
	var url_we = `https://api.darksky.net/forecast/9af51d7d0aeb7a2214d41ea72fde0695/${lat},${lng}`;
	// console.log(url_we);
	request({
		url: url_we,
		json: true
	},(error, response, body) => {
		if(!error && response.statusCode === 200){
			callback(undefined, {
				temperature: body.currently.temperature,
				apparentTemperature: body.currently.apparentTemperature
			});
			
		} else{
			callback('Unable to fetch weather'); 
		}
	});

};

module.exports = {
	getWeather
};
