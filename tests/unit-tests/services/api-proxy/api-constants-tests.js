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
            expect(constants.url).to.equal('https://api.statsfc.com/crowdscores/table.php?competition=EPL&key=VsIkrxOyDBTSi1KkdIl7gdFb5dqjvOihsJ1PxVnN');
        });
    });
}());
