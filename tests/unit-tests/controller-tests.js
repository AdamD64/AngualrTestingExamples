(function(){
    'use strict';
    describe('Controller Tests', function(){
        var scope;
        var controller;
        var sandbox;

        var viewModelProxyMock;

        beforeEach(module('myApp'));

        beforeEach(inject(function($rootScope, $controller, $q){

            mocks.apiProxy.getResults = function(){
                return $q.when({winner: '1', gameboard:'111111111'});
            };
            //Set up functions - $q.when(repsonseData)

            sandbox = sinon.sandbox.create();
            viewModelProxyMock = sinon.sandbox.mock(mocks.viewModel);

            scope = $rootScope.$new(); //Create a new root scope...

            //Set up mock observers


            controller = $controller('myController', {
                $scope: scope,
                viewModel: mocks.viewModel,
                apiProxy: mocks.apiProxy
            });

        }));

        it('Check getNextResult updated the view model', function(){
            viewModelProxyMock
                .expects("updateResults")
                .withArgs('1','111111111')
                .once();
            scope.getNextResult();
        });


        it('Check reset calls the view model reset', function(){
            viewModelProxyMock.expects("resetStatistics").once();
            scope.resetStatistics();
        });

        afterEach(function(){
            scope.$digest();
            viewModelProxyMock.verify();
            sandbox.restore();
        });


    });


}());
