(function() {
    describe('number to token filter tests', function() {
        var filter;
        beforeEach(module('myApp.filters'));

       beforeEach(function(){
            //*******************************************************
            // Leaving this in as a word of warning -
            // This pretty much follows the formula in the angular
            // docs other than the fact I'm trying to do it in a
            // beforeEach (which doesn't matter - did it in an "it"
            // also the same inject function is called in both
            // Still got an unknown provider
            // Either
            //     a) I've done something wrong - possibly subtle
            //        possibly a cock-up, if so I can't spot it yet.
            //     b) The Docs are wrong - filter isn't a provider
            //        it's described as a "special purpose object"
            //        so using the provider infrastructure to get it
            //        insn't right?
            //     c) Different versions of the angular framework???
            //*******************************************************
            //inject(function($injector){
            //    filter = $injector.get('numberToToken');
            //});
            inject(function($filter){
                filter = $filter('numberToToken');
            });
        });

        it('One returns X', function(){
            expect(filter(1)).to.equal('X');
        });

        it('Two returns O', function(){

            expect(filter(2)).to.equal('O');
        });

        it('Anything else returns "', function(){

            expect(filter('Z')).to.equal('');
        });
    });
}());
