//(function(){
//    'use strict';
    angular.module('myApp.filters')
        .filter('numberToToken', function(){
            return function(input){
                if(input == 1){
                    return 'X';
                }
                else if(input == 2){
                    return 'O';
                }
                return '';
            };
        });
//}());
