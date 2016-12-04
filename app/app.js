var app = angular.module('app', ['ngRoute']);

// routes
app.config(function($routeProvider) {
	$routeProvider
	// route home page
	.when('/', {
	    templateUrl : 'app/views/home.html',
	    controller  : 'homeController'
	})
	.otherwise({
	    redirectTo: "/"
	});
});
