(function(){
    'use strict';
    describe('view model tests', function(){
        var gameModel;
        beforeEach(function(){
            module('myApp.services.model');
            inject(function($injector){
                gameModel = $injector.get('viewModel');
            });
        });

        it('test initial value - draws', function(){
            expect(gameModel.getTotalGamesPlayed()).to.be.equal(0);
        });

        it('test initial value - draws', function(){
            expect(gameModel.getNumberOfDraws()).to.be.equal(0);
        });

        it('test initial value - player1 wins', function(){
            expect(gameModel.getNumberOfPlayer1Wins()).to.be.equal(0);
        });

        it('test initial value - player2 wins', function(){
            expect(gameModel.getNumberOfPlayer1Wins()).to.be.equal(0);
        });

        it('test initial value - last game board', function(){
            expect(gameModel.getLastPlayedBoard()).to.be.equal('000000000');
        });

        it('update results correctly updates game board', function(){
            gameModel.updateResults('', '111222111');
            expect(gameModel.getLastPlayedBoard()).to.be.equal('111222111');
        });

        it('update results correctly updates on draw', function(){
            gameModel.updateResults('0');
            expect(gameModel.getNumberOfDraws()).to.be.equal(1);
            expect(gameModel.getNumberOfPlayer1Wins()).to.be.equal(0);
            expect(gameModel.getNumberOfPlayer2Wins()).to.be.equal(0);
            expect(gameModel.getTotalGamesPlayed()).to.be.equal(1);
        });

        it('update results correctly updates on player 1 win', function(){
            gameModel.updateResults('1');
            expect(gameModel.getNumberOfDraws()).to.be.equal(0);
            expect(gameModel.getNumberOfPlayer1Wins()).to.be.equal(1);
            expect(gameModel.getNumberOfPlayer2Wins()).to.be.equal(0);
            expect(gameModel.getTotalGamesPlayed()).to.be.equal(1);
        });

        it('update results correctly updates on player 2 win', function(){
            gameModel.updateResults('2');
            expect(gameModel.getNumberOfDraws()).to.be.equal(0);
            expect(gameModel.getNumberOfPlayer1Wins()).to.be.equal(0);
            expect(gameModel.getNumberOfPlayer2Wins()).to.be.equal(1);
            expect(gameModel.getTotalGamesPlayed()).to.be.equal(1);
        });

        it('update results correctly updates darw, player1 win, player2 win and reset correctly resets', function(){
            gameModel.updateResults('0');
            gameModel.updateResults('1');
            gameModel.updateResults('2');
            expect(gameModel.getNumberOfDraws()).to.be.equal(1);
            expect(gameModel.getNumberOfPlayer1Wins()).to.be.equal(1);
            expect(gameModel.getNumberOfPlayer2Wins()).to.be.equal(1);
            expect(gameModel.getTotalGamesPlayed()).to.be.equal(3);
            gameModel.resetStatistics();
            expect(gameModel.getNumberOfDraws()).to.be.equal(0);
            expect(gameModel.getNumberOfPlayer1Wins()).to.be.equal(0);
            expect(gameModel.getNumberOfPlayer2Wins()).to.be.equal(0);
            expect(gameModel.getTotalGamesPlayed()).to.be.equal(0);
        });

    });
}());
