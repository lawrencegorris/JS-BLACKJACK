const playerCards = document.querySelector('#player-hand');
const dealerCards = document.querySelector('#dealer-hand');
const playerScoreBox = document.querySelector('#player-score');
const dealerScoreBox = document.querySelector('#dealer-score');
const hitButton = document.querySelector('#hit').addEventListener('click', hit);
//const standButton = document.querySelector('#stand').addEventListener('click', compareScores);


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
    console.log(currentDeck.length);
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
}