"use strict";

app.factory('PamphletFactory', ($q, $http) => {
	let getInfo = () => {
		return $q((resolve, reject) => {
			console.log("got here");
			$http.get("./data/guides.json")
			.then((data) => {
				console.log(data);
				resolve(data);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};
	return {getInfo};
});