'use strict';

/*
 * 
 */
app.controller('homeController', ['$scope' 'Repositories', 
	function($scope, Repositories) {
	
		$scope.user = 'vagnerld'; // user default
		$scope.repositories = [];

		$scope.listRepositories = function() {
		
		    Repositories.getPublicRepositories( $scope.user ).then(function(data){
		        if (data){
		        	console.log( data );
		        	$scope.repositories = data;
		        }
		    });
		
		};
	    
		listRepositories();
	}]
);