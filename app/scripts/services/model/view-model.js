(function(){
    'use strict';
    angular.module('myApp.services.model')
        .service('viewModel', function(){
            var me = this;
            var numberOfDraws = 0;
            var player1Wins;
            var player2Wins;
            var lastPlayedBoard;

            me.getNumberOfDraws = function(){
                return numberOfDraws;
            };

            me.getNumberOfPlayer1Wins = function(){
                return player1Wins;
            };

            me.getNumberOfPlayer2Wins = function(){
                return player2Wins;
            };

            me.getLastPlayedBoard = function(){
                return lastPlayedBoard;
            };

            me.getTotalGamesPlayed = function(){
                return numberOfDraws + player1Wins + player2Wins;
            };

            me.updateResults= function (winner, gameBoard){
                lastPlayedBoard = gameBoard;
                if(winner==1){
                    player1Wins++;
                }
                else if(winner == 2){
                    player2Wins++;
                }
                else {
                    numberOfDraws++;
                }

            };

            me.resetStatistics = function (){
                numberOfDraws = 0;
                player1Wins =0;
                player2Wins =0;
                lastPlayedBoard = '000000000';
            };

            me.resetStatistics();
        });
}());
