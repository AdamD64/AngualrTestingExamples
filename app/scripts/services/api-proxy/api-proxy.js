(function(){
    'use strict';
    angular.module('myApp.services.apiProxy')
        .service('apiProxy', function($http, $q, apiConstants){
            var me = this;
            me.getResults = function(){
                var deferred = $q.defer();

                var req = {
                    method: 'POST',
                    url: apiConstants.url,
                    data: {player1:'random', player2:'random'}
                };
                $http(req)
                .success(function(data){
                    deferred.resolve(data);
                })
                .error(function(data, status){
                    deferred.reject({status:status, data: data});
                });
                return deferred.promise;
            };
    });
}());