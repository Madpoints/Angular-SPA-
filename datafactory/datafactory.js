angular.module('myApp').factory('WeatherFactory', WeatherFactory);

function WeatherFactory($http) {
	return {
		getAllCities: getAllCities,
		getWeather: getWeather,		
	};	

	function getAllCities() {
		return $http.get('http://api.openweathermap.org/data/2.5/find?lat=41.8&lon=-71.41&units=imperial&APPID='+YOURAPIKEY).then(complete).catch(failed);
	}

	function getWeather(id) {
		return $http.get('http://api.openweathermap.org/data/2.5/weather?id='+id+'&units=imperial&APPID='+YOURAPIKEY).then(complete).catch(failed);	
	}

	function complete(response) {
		return response.data;
	}

	function failed(error) {
		return error.statusText;
	}
}