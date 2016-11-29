'use strict';
/**
 * 
 * 
 */
app.factory('Repositories', function ($http) {
        return {
            /*
             * Retorna json com a lista de repositórios publicos de um usuário
             */
             getPublicRepositories: function ($user){
                return $http('https://api.github.com/users/'+ $user +'/repos').get();
            }
        };
    }
);