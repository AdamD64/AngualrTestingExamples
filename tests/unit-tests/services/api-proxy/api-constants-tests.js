(function(){
    'use strict';
    describe('Test game-constants', function () {
        var constants;
        beforeEach(function(){
            module('myApp.services.apiProxy');
            inject(function($injector){
                constants = $injector.get('apiConstants');
            });
        });

        it('API URL has not changed', function(){
            //Arguably this should not be a unit test - if the service being moved isn't relevant to the
            //the functionality.
            //I like to keep tests like these as they will break if a dev temporarily moves the code
            expect(constants.url).to.equal('http://EUTAVEG-01.tombola.emea:35000/api/v1.0/newgame');
        });
    });
}());
