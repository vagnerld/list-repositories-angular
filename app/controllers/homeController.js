(function() {
	'use strict';

	/*
	 * Home page Controller
	 */
	app.controller('homeController', ['$scope', 'Repositories', 
		function($scope, Repositories) {

			$scope.user = 'vagnerld'; // user default
			$scope.repositories = []; // list of repositories

			$scope.listRepositories = function() {
			    Repositories.getPublicRepositories( $scope.user ).then(function(repositorie){
				if ( repositorie.status == 200 ){
					$scope.repositories = repositorie.data;
				}
			    });
			};

			$scope.listRepositories();

		}]
	);

})();
