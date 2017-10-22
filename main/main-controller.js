angular.module('myApp')
	.controller('MainController', MainController);

function MainController(WeatherFactory) {
	var vm = this;

	WeatherFactory.getAllCities().then(function(response) {
		vm.cities = response.list;
		console.log(vm.cities);
	});


	vm.name = 'Southern R.I. Weather';	
}