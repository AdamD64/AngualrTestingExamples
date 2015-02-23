(function(){
    'use-strict';
    angular.module('myApp.directives')
        .directive('gameSquare', function(){
            return{
                restrict:'E',
                template: function (scope, element, attrs, controller) {
                    return '<span>{{viewModel.getLastPlayedBoard()['+ element.number +'] | numberToToken}}</span>';
                }
            };

    });
}());
