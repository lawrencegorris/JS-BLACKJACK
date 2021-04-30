const playerCards = document.querySelector('#player-hand');
const dealerCards = document.querySelector('#dealer-hand');
const playerScoreBox = document.querySelector('#player-score');
const dealerScoreBox = document.querySelector('#dealer-score');
const hitButton = document.querySelector('#hit').addEventListener('click', hit);

function newGame(){
    playerHand = [];
    dealerHand = [];
    playerScore = 0;
    playerHand.push(deal());
    playerHand.push(deal());
    dealerHand.push(deal());
    dealerHand.push(deal());
    showHands();
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

function hit(){
    let randomCard = currentDeck.pop();
    playerHand.push(randomCard);
    console.log(randomCard);
}



function stand(){
}