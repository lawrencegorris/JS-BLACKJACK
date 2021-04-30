// Setup Game
let username = prompt('Hello, what is your name?');
alert('Welcome ' + username + ', please enjoy the game. Good luck!');
const showUsername = document.querySelector('#username-placeholder');
showUsername.innerHTML = username + '\'s cards: ';

let currentDeck = createDeck();

const start = document.querySelector('#start').addEventListener('click', newGame);
