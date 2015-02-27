(function(){
    describe('player selection tests', function() {
        var compile,
            rootScope;

        // Load the myApp module, which contains the directive
        beforeEach(module('myApp.directives'));

        beforeEach(
            module(function($provide) {
                $provide.value('numberToTokenFilter', function (value) {
                    return value;
                });
        }));

        // Store references to $rootScope and $compile
        // so they are available to all tests in this describe block
        beforeEach(inject(function($compile, $rootScope){
            // The injector unwraps the underscores (_) from around the parameter names when matching
            compile = $compile;
            rootScope = $rootScope;

        }));

        it('Derective Works....', function() {
            // Compile a piece of HTML containing the directive
            var directiveElementHtml = '<game-square number="2"></game-square>';
            rootScope.viewModel = { getLastPlayedBoard: function () { return '221222222'; } };
            var element = compile(directiveElementHtml)(rootScope);
            rootScope.$digest();

            expect(element[0].toString()).to.be.equal('[object HTMLElement]');
            expect(element.attr('number')).to.be.equal('2');
            expect(element[0].children.length).to.equal(1);
            var innerElement  = element[0].children[0];
            expect(innerElement.toString()).to.be.equal('[object HTMLSpanElement]');
            expect(innerElement.innerHTML).to.be.equal('1');
        });
    });
}());

