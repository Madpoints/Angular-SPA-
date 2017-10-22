angular.module('myApp')
	.controller('WeatherController', WeatherController);

function WeatherController($routeParams, WeatherFactory) {
	var vm = this;
	var id = $routeParams.id;

	WeatherFactory.getWeather(id).then(function(response) {
		vm.name = response.name;
		vm.weather = response;
		console.log(vm.weather);
	});
}
