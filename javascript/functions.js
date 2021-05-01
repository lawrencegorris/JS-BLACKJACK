const playerCards = document.querySelector('#player-hand');
const dealerCards = document.querySelector('#dealer-hand');
const playerScoreBox = document.querySelector('#player-score');
const dealerScoreBox = document.querySelector('#dealer-score');
const hitButton = document.querySelector('#hit').addEventListener('click', hit);
const standButton = document.querySelector('#stand').addEventListener('click', stand);


function newGame(){
    playerHand = [];
    dealerHand = [];
    playerScore = 0;
    playerHand.push(deal());
    playerHand.push(deal());
    dealerHand.push(deal());
    dealerHand.push(deal());
    showHands();
    showScore();
    checkBlackjack();
}

function deal(){
    let getRandomCard = Math.floor(Math.random() * currentDeck.length);
    let card = currentDeck[getRandomCard];
    currentDeck.splice(getRandomCard, 1);
    return (card);
}; 

function showHands(){
    let currentPlayerHand = "";
    playerHand.forEach((card) => {
        currentPlayerHand += card.Rank + " " + card.Suit + " ";
    });
    playerCards.innerHTML = currentPlayerHand;
    let currentDealerHand = "";
    dealerHand.forEach((card) => {
        currentDealerHand += card.Rank + " " + card.Suit + " ";
    })
    dealerCards.innerHTML = currentDealerHand;
}

function showScore(){
    playerScore = 0;
    playerHand.forEach((card) => {
        playerScore += parseInt(card.Value);
    });
    playerScoreBox.innerHTML = playerScore;
    dealerScore = 0;
    dealerHand.forEach((card) => {
        dealerScore += parseInt(card.Value);
    })
    dealerScoreBox.innerHTML = dealerScore;
    return dealerScore;
}

function hit(){
    let random = Math.floor(Math.random() * currentDeck.length);
    let card = currentDeck[random]; 
    currentDeck.splice(random, 1); 
    console.log(currentDeck.length);
    playerHand.push(card)
    console.log(playerHand);
    showHands();
    showScore();
    compareScores();
}

function stand(){
    while(dealerScore <= 15){
        makeDealerDraw();
    } 
    compareScores();
}

function checkBlackjack(){
    if (playerScore > 21){
        alert('You busted');
    }else if (dealerScore > 21){
        alert('Dealer busted');
    }else if (playerScore == 21 && dealerScore < 21){
        alert('You won! BlackJack!')
    }else if (playerScore < 21 && dealerScore == 21){
        alert('You lost. Dealer BlackJack');
    }
}

function compareScores(){
    if(playerScore > 21 && dealerScore <= 21){
        alert('You busted. Dealer wins.');
    }else if (playerScore <= 21 && dealerScore > 21){
        alert('Dealer busted. You win.');
    }
}


function makeDealerDraw(){
        let random = Math.floor(Math.random() * currentDeck.length);
        let card = currentDeck[random]; 
        currentDeck.splice(random, 1); 
        dealerHand.push(card)
        showHands();
        showScore();
        compareScores();
}