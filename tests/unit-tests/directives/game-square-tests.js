(function(){
    describe('player selection tests', function() {
        var compile,
            rootScope;

        // Load the myApp module, which contains the directive
        beforeEach(module('myApp.directives'));

        // Store references to $rootScope and $compile
        // so they are available to all tests in this describe block
        beforeEach(inject(function($compile, $rootScope){
            // The injector unwraps the underscores (_) from around the parameter names when matching
            compile = $compile;
            rootScope = $rootScope;
        }));

        it('TODO', function() {
            // Compile a piece of HTML containing the directive
            //var directiveElement = '<current-player></current-player>';
            //rootScope.gameModel = {currentPlayer:'foo'};
            //var element = compile(directiveElement)(rootScope);
            //rootScope.$digest();
            //
            //assert.equal(element[0].toString(), '[object HTMLImageElement]');
            //assert.equal(element.attr('class'), 'square selectionfoo');
            //assert.equal(element.attr('ng-src'), 'images/blank.png');
            //assert.equal(element.attr('src'), 'images/blank.png');
        });
    });
}());

