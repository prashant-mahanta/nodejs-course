const request = require('request');

var geocodeAddress = (address, callback) => {
	var url_l = 'https://maps.googleapis.com/maps/api/geocode/json?address='+ encodeURIComponent(address);

// console.log(url_l);
request({
	url: url_l,
	json: true
}, (error, response, body) => {
	//console.log(JSON.stringify(body, undefined, 2));
	// console.log(body);

	if(error){
		callback("Unable to connect to Google Servers");
	} else if(body.status === 'ZERO_RESULTS'){
		callback('Unable to find the address');
	} else if(body.status === 'OK'){
		callback(undefined, {
			address: body.results[0].formatted_address,
			Latitude: body.results[0].geometry.location.lat,
			Longitude: body.results[0].geometry.location.lng 
		});
		// console.log(`Address: ${body.results[0].formatted_address} \n Latitude: ${body.results[0].geometry.location.lat} \n Longitude: ${body.results[0].geometry.location.lng}`);

	}

});

};

module.exports = {
	geocodeAddress
};