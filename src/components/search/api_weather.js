/* export const weather_api = {
	key: 'dd29010c85975f872fbe102c69500ff1',
	url: 'api.openweathermap.org/data/2.5/weather?q=London&'
};

fetch(`${weather_api.url}${weather_api.key}`) */

export const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c2bdc3e7d2mshb239e0726713aecp1b7733jsnd711a66f11a4',
		'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
	}
};

fetch('https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=38.5&lat=-78.5', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));