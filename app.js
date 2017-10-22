angular.module('myApp', ['ngRoute']).config(config);

function config($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'main/main.html',
		controller: 'MainController',
		controllerAs: 'vm'
	}).when('/weather/:id', {
		templateUrl: 'weather/weather.html',
		controller: 'WeatherController',
		controllerAs: 'vm'
	}).otherwise({
		redirectTo: '/'
	});
}