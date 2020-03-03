//TODO: Casos em que o jogo terminar empatado e ser necessário tirar uma carta para definir o vencedor

//Prototipo da classe para partida de dois jogadores
class Match2 {
    constructor(winner, playerOne, playerTwo, playerOneRoundOne, playerOneRoundTwo, 
        playerOneRoundThree, playerOneRoundFour, playerTwoRoundOne,
        playerTwoRoundTwo, playerTwoRoundThree, playerTwoRoundFour, playerOneTotal, playerTwoTotal){
        this.type = 0;
        this.winner = winner;
        this.playerOne = playerOne;
        this.playerTwo = playerTwo;
        this.cardsPlayerOne = [playerOneRoundOne, playerOneRoundTwo, playerOneRoundThree, playerOneRoundFour, playerOneTotal];
        this.cardsPlayerTwo = [playerTwoRoundOne, playerTwoRoundTwo, playerTwoRoundThree, playerTwoRoundFour, playerTwoTotal];
        }
}

//Prototipo da classe para partida de tres jogadores
class Match3 {
    constructor(winner, playerOne, playerTwo, playerThree, playerOneRoundOne, playerOneRoundTwo, playerOneRoundThree, 
		playerTwoRoundOne,playerTwoRoundTwo, playerTwoRoundThree, playerThreeRoundOne, playerThreeRoundTwo, playerThreeRoundThree, 
		playerOneTotal, playerTwoTotal, playerThreeTotal){
        this.type = 1;
        this.winner = winner;
        this.playerOne = playerOne;
        this.playerTwo = playerTwo;
	this.playerThree = playerThree;
        this.cardsPlayerOne = [playerOneRoundOne, playerOneRoundTwo, playerOneRoundThree, playerOneTotal];
        this.cardsPlayerTwo = [playerTwoRoundOne, playerTwoRoundTwo, playerTwoRoundThree,  playerTwoTotal];
	this.cardsPlayerThree = [playerThreeRoundOne, playerThreeRoundTwo, playerOneRoundThree, playerThreeTotal];
        }
}

//Prototipo da classe para partida de quatro jogadores
class Match4 {
    constructor(winner, playerOne, playerTwo, playerThree, playerFour, playerOneRoundOne, playerOneRoundTwo, 
        playerOneRoundThree, playerOneRoundFour, playerTwoRoundOne, playerTwoRoundTwo, playerTwoRoundThree, 
		playerTwoRoundFour,playerThreeRoundOne, playerThreeRoundTwo, playerThreeRoundThree, playerThreeRoundFour,
		playerFourRoundOne, playerFourRoundTwo, playerFourRoundThree, playerFourRoundFour, 
		playerOneTotal, playerTwoTotal, playerThreeTotal, playerFourTotal){
        this.type = 2;
        this.winner = winner;
        this.playerOne = playerOne;
        this.playerTwo = playerTwo;
	this.playerThree = playerThree;
	this.playerFour = playerFour;
        this.cardsPlayerOne = [playerOneRoundOne, playerOneRoundTwo, playerOneRoundThree, playerOneRoundFour, playerOneTotal];
        this.cardsPlayerTwo = [playerTwoRoundOne, playerTwoRoundTwo, playerTwoRoundThree, playerTwoRoundFour, playerTwoTotal];
	this.cardsPlayerThree = [playerThreeRoundOne, playerThreeRoundTwo, playerThreeRoundThree, playerThreeRoundFour, playerThreeTotal];
	this.cardsPlayerFour = [playerFourRoundOne, playerFourRoundTwo, playerFourRoundThree, playerFourRoundFour, playerFourTotal];
        }
}


//Função chamada para partida de 2 jogadores
function novapartida2() {
    var winner;
    var playerOne = toLowerCase(document.getElementById('two_player_one').value);
    var playerTwo = toLowerCase(document.getElementById('two_player_two').value);
    var playerOneRoundOne = parseInt(document.getElementById('two_player_one_round_one').value);
    var playerOneRoundTwo = parseInt(document.getElementById('two_player_one_round_two').value);
    var playerOneRoundThree = parseInt(document.getElementById('two_player_one_round_three').value);
    var playerOneRoundFour = parseInt(document.getElementById('two_player_one_round_four').value);
    var playerTwoRoundOne = parseInt(document.getElementById('two_player_two_round_one').value);
    var playerTwoRoundTwo = parseInt(document.getElementById('two_player_two_round_two').value);
    var playerTwoRoundThree = parseInt(document.getElementById('two_player_two_round_three').value);
    var playerTwoRoundFour = parseInt(document.getElementById('two_player_two_round_four').value);
    var playerOneTotal = playerOneRoundOne + playerOneRoundTwo + playerTwoRoundThree + playerTwoRoundFour;
    var playerTwoTotal = playerTwoRoundOne + playerTwoRoundTwo + playerTwoRoundThree + playerTwoRoundFour;
    
    if(playerOneTotal < playerTwoTotal){
        winner = playerOne;
    }
    else if (playerTwoTotal < playerOneTotal ){
		winner = playerTwo;
    }
    else {
         //TODO
    }

    var partida = new Match2(winner, playerOne, playerTwo, playerOneRoundOne, playerOneRoundTwo, playerOneRoundThree, 
	playerOneRoundFour, playerTwoRoundOne, playerTwoRoundTwo, playerTwoRoundThree, playerTwoRoundFour, playerOneTotal, playerTwoTotal);
    console.log(typeof(playerOneRoundOne));
    console.log(partida);
}


//Função chamada para partida de 3 jogadores
function novapartida3() {
    var winner;
    var playerOne = toLowerCase(document.getElementById('three_player_three').value);
    var playerTwo = toLowerCase(document.getElementById('three_player_three').value);
    var playerThree = toLowerCase(document.getElementById('three_player_three').value);
    var playerOneRoundOne = parseInt(document.getElementById('three_player_one_round_one').value);
    var playerOneRoundTwo = parseInt(document.getElementById('three_player_one_round_two').value);
    var playerOneRoundThree = parseInt(document.getElementById('three_player_one_round_three').value);
    var playerTwoRoundOne = parseInt(document.getElementById('three_player_two_round_one').value);
    var playerTwoRoundTwo = parseInt(document.getElementById('three_player_two_round_two').value);
    var playerTwoRoundThree = parseInt(document.getElementById('three_player_two_round_three').value);
    var playerThreeRoundOne = parseInt(document.getElementById('three_player_three_round_one').value);
    var playerThreeRoundTwo = parseInt(document.getElementById('three_player_three_round_two').value);
    var playerThreeRoundThree = parseInt(document.getElementById('three_player_three_round_three').value);
    var playerOneTotal = playerOneRoundOne + playerOneRoundTwo + playerTwoRoundThree;
    var playerTwoTotal = playerTwoRoundOne + playerTwoRoundTwo + playerTwoRoundThree;
    var playerThreeTotal = playerThreeRoundOne + playerThreeRoundTwo + playerThreeRoundThree;
    
    if(playerOneTotal < playerTwoTotal && playerThreeTotal){
        winner = playerOne;
    }
    else if (playerTwoTotal < playerOneTotal && playerThreeTotal){
		winner = playerTwo;
    }
	else if (playerThreeTotal < playerOneTotal && playerTwoTotal){
		winner = playerThree;
    }	
    else {
          //TODO
    }

    var partida = new Match3(winner, playerOne, playerTwo, playerThree, playerOneRoundOne, playerOneRoundTwo, playerOneRoundThree, 
	playerTwoRoundOne, playerTwoRoundTwo, playerTwoRoundThree, playerThreeRoundOne, playerThreeRoundTwo, playerThreeRoundThree,
	playerOneTotal, playerTwoTotal, playerThreeTotal);
}

//Função chamada para partida de 4 jogadores
function novapartida4() {
    var winner;
    var playerOne = toLowerCase(document.getElementById('four_player_one').value);
    var playerTwo = toLowerCase(document.getElementById('four_player_two').value);
    var playerThree = toLowerCase(document.getElementById('four_player_three').value);
    var playerFour = toLowerCase(document.getElementById('four_player_four').value);
    var playerOneRoundOne = parseInt(document.getElementById('four_player_one_round_one').value);
    var playerOneRoundTwo = parseInt(document.getElementById('four_player_one_round_two').value);
    var playerOneRoundThree = parseInt(document.getElementById('four_player_one_round_three').value);
    var playerOneRoundFour = parseInt(document.getElementById('four_player_one_round_four').value);
    var playerTwoRoundOne = parseInt(document.getElementById('four_player_two_round_one').value);
    var playerTwoRoundTwo = parseInt(document.getElementById('four_player_two_round_two').value);
    var playerTwoRoundThree = parseInt(document.getElementById('four_player_two_round_three').value);
    var playerTwoRoundFour = parseInt(document.getElementById('four_player_two_round_four').value);
    var playerThreeRoundOne = parseInt(document.getElementById('four_player_three_round_one').value);
    var playerThreeRoundTwo = parseInt(document.getElementById('four_player_three_round_two').value);
    var playerThreeRoundThree = parseInt(document.getElementById('four_player_three_round_three').value);
    var playerThreeRoundFour = parseInt(document.getElementById('four_player_three_round_four').value);
    var playerFourRoundOne = parseInt(document.getElementById('four_player_four_round_one').value);
    var playerFourRoundTwo = parseInt(document.getElementById('four_player_four_round_two').value);
    var playerFourRoundThree = parseInt(document.getElementById('four_player_four_round_three').value);
    var playerFourRoundFour = parseInt(document.getElementById('four_player_four_round_four').value);
    var playerOneTotal = playerOneRoundOne + playerOneRoundTwo + playerTwoRoundThree + playerTwoRoundFour;
    var playerTwoTotal = playerTwoRoundOne + playerTwoRoundTwo + playerTwoRoundThree + playerTwoRoundFour;
    var playerThreeTotal = playerThreeRoundOne + playerThreeRoundTwo + playerThreeRoundThree + playerThreeRoundFour;
    var playerFourTotal = playerFourRoundOne + playerFourRoundTwo + playerFourRoundThree + playerFourRoundFour;
    
    if(playerOneTotal < playerTwoTotal && playerThreeTotal && playerFourTotal){
        winner = playerOne;
    }
    else if (playerTwoTotal < playerOneTotal && playerThreeTotal && playerFourTotal){
        winner = playerTwo;
    }
	else if (playerThreeTotal < playerOneTotal && playerTwoTotal && playerFourTotal){
        winner = playerThree;
    }
	else if (playerFourTotal < playerOneTotal && playerTwoTotal && playerThreeTotal){
        winner = playerFour;
    }
    else {
          //TODO
    }

    var partida = new Match4(winner, playerOne, playerTwo, playerThree, playerFour, playerOneRoundOne, playerOneRoundTwo, 
        playerOneRoundThree, playerOneRoundFour, playerTwoRoundOne, playerTwoRoundTwo, playerTwoRoundThree, 
		playerTwoRoundFour,playerThreeRoundOne, playerThreeRoundTwo, playerThreeRoundThree, playerThreeRoundFour,
		playerFourRoundOne, playerFourRoundTwo, playerFourRoundThree, playerFourRoundFour, 
		playerOneTotal, playerTwoTotal, playerThreeTotal, playerFourTotal);
}
