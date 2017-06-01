"use strict";

app.controller("BookCtrl", function ($scope, PamphletFactory) {
	console.log("got to bookCTRL");
	PamphletFactory.getInfo()
	.then( (collection) => {
		$scope.books = collection.data.guides;
		console.log($scope.books, "data in Ctrl");
	});
});