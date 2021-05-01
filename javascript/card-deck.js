function createDeck(){
    let suits = ['hearts', 'diamonds', 'clubs', 'spades'];
    let rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let value = ['2','3', '4', '5', '6', '7', '8', '9', '10', '10', '10', '10', '11'];
    let deck =  new Array();
    for (let i = 0; i < suits.length; i++){
        for (let j = 0; j < rank.length; j++){
            let card = {Rank: rank[j], Suit: suits[i], Value: value[j]};
            deck.push(card);
        }
    }
    return deck;
} 

function shuffle(deck){
    for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
}