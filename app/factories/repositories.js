'use strict';
/**
 * 
 * 
 */
angular.module('app').factory('Repositories', [
    '$http'
    function ($http) {
        return {
            /*
             * Retorna json com a lista de repositórios publicos de um usuário
             */
             getPublicRepositories: function ($user){
                return $http('https://api.github.com/users/'+ $user +'/repos').get();
            }
        };
    }
]);