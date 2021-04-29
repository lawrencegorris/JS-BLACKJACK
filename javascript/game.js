// Setup Game

let username = prompt('Hello, what is your name?');
alert('Welcome ' + username + ', please enjoy the game. Good luck!');

let playerHand = [];
let dealerHand = [];
const start = document.querySelector('#start');
const hit = document.querySelector('#hit');
const stand = document.querySelector('#stand');


shuffle(deck);
console.log(deck);