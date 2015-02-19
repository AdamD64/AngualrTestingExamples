(function(){
    'use strict';
    angular.module('myApp.services.apiProxy')
        .constant('apiConstants', {
            url:'http://EUTAVEG-01.tombola.emea:35000/api/v1.0/newgame'
        });
}());