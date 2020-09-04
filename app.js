let scores,roundScore,activePlayer,isGameRunning;

init();



document.querySelector('.btn-roll').addEventListener('click',() => {

    if(isGameRunning) {
            // create random number

            var dice = Math.floor(Math.random() * 6) + 1;

            // display the result

            var diceDom = document.querySelector('.dice')

            diceDom.style.display = 'block';
            diceDom.src = 'dice-'+ dice+'.png'


            // update the round score only if the rolled score is not 1

            if(dice !== 1) {

                // add score

                roundScore += dice;

                document.querySelector('#current-' + activePlayer).textContent = roundScore;

            } else {

                nextPlayer();

 }
    }
    
   

});

document.querySelector('.btn-hold').addEventListener('click', function() {


    if(isGameRunning) {



    // add the cureent score to the global score


    scores[activePlayer] += roundScore;

    document.querySelector('#current-' + activePlayer).textContent = 0;
  

    // update the user interface 

    document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];

    // check if the player win the game 

    if(scores[activePlayer] >= 100) {
        document.querySelector('#name-'+activePlayer).textContent = "winner";
        document.querySelector('.dice').style.display = 'none';
        
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        isGameRunning = false;

    } else {
        nextPlayer();
    }
}
   
})


function nextPlayer() {
    // next player
        
    activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');


    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click',init)

function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    isGameRunning = true;
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.querySelector('#name-0').textContent = "Player 1";
    document.querySelector('#name-1').textContent = "Player 2";
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');



}

// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('.dice').style.display = 'none';