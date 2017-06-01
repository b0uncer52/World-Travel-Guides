"use strict";

var app = angular.module("WWTApp", ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'partials/bookList.html',
		controller: 'BookCtrl'
	}).otherwise('/');
});

console.log("hiya app.js");