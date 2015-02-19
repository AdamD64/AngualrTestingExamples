(function(){
    'use strict';
    angular.module('myApp.services.apiProxy')
        .service('apiProxy', function($http, $q, apiConstants){
            var me = this;
            me.getFootballResults = function(){
                var deferred = $q.defer();
                $http.get(apiConstants.url)
                    .success(function(data){
                        deferred.resolve(data.table);
                    })
                    .error(function(data, status){
                        deferred.reject({status:status, data: data});
                    });
                return deferred.promise;
            };
    });
}());