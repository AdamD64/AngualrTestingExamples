(function(){
    'use strict';
    angular.module('myApp.filters')
        .filter('numberToToken', function(){
            return function(number){
                if(number == 1){
                    return 'X';
                }
                else if(number == 2){
                    return 'O';
                }
                return '';

            };
        });
}());
