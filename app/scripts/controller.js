(function () {
    'use strict';

        angular.module('myApp')
        .controller('myController', function($scope, viewModel, apiProxy){
                var me = this;
                $scope.viewModel = viewModel;


                $scope.getNextResult = function(){
                    apiProxy.getResults()
                        .then(function(results){
                            $scope.viewModel.updateResults(results.winner, results.gameboard);
                        })
                        .catch(function(){

                        });

                };

                $scope.resetStatistics = function(){
                    $scope.viewModel.resetStatistics();
                };

    });
})();