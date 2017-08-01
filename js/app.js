//... Create your module
var app = angular.module("MailboxApp", ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when("/inbox", {
		controller : "HomeController",
		templateUrl : "views/home.html"
	})
	.when("/inbox/:id", {
		controller : "EmailController",
		templateUrl : "views/email.html"
	})
	.otherwise({
		redirectTo : "/inbox"
	});
});