(function(){
    'use strict';
    describe('Test game-constants', function () {
        var $httpBackend;
        var apiProxy;
        beforeEach(function(){
            module('myApp.services.apiProxy');

            module(function($provide){
                $provide.constant('apiConstants', mocks.apiConsantsMock);
            });

            inject(function($injector){
                $httpBackend = $injector.get('$httpBackend');
                apiProxy = $injector.get('apiProxy');
            });
        });

        it('Call to service returns dat when response is OK', function(){
            $httpBackend
                .expectPOST(mocks.apiConsantsMock.url)
                .respond({ data:'foo data'});

            apiProxy.getResults()
                .then(function(results){
                    expect(results).to.deep.equal({ data:'foo data'});
                })
                .catch(function(errorData){
                    expect(errorData).to.not.be.ok();
                });
            $httpBackend.flush();
        });


        it('Call to service returns error data when 404d', function(){
            $httpBackend
                .expectPOST(mocks.apiConsantsMock.url)
                .respond(function(){
                   return [404, 'Not Found', {}];
                });

            apiProxy.getResults()
                .then(function(results){
                    expect(results).to.not.equal('unexpected sucessful repsonse from server');
                })
                .catch(function(errorData){
                    expect(errorData).to.deep.equal({ status: 404, data: 'Not Found' });
                });
            $httpBackend.flush();
        });

        afterEach(function () {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });
    });
}());