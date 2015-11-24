var app = angular.module('theHomeLife', ['ngRoute'])

app.config(function($routeProvider ) {
// $httpProvider.defaults.headers.common('Access-Control-Allow-Headers') = *;
// $httpProvider.interceptors.push('httpRequestInterceptor')

$routeProvider.when('/', {

	templateUrl:'js/home/homeTemplate.html',
	controller: 'homeController'

}).when('/calendar', {
	templateUrl:'js/calendar/calendarTemplate.html',
	controller: 'calendarController'

}).when('/favorites', {
	templateUrl: 'js/favorites/favoritesTemplate.html',
	controller: 'favoritesController'

}).otherwise({

	redirectTo:'/'
})



})
