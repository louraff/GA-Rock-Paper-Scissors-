/*----- constants -----*/
const AUDIO = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-simple-countdown-922.mp3');
const RPS_LOOKUP = { //Object so we can look up the proper image based on whether it is r p or s 
    p: {img: 'imgs/paper.png', beats: 'r'},
    r: {img: 'imgs/rock.png', beats: 's'},
    s: {img: 'imgs/scissors.png', beats: 'p'}
};

/*----- app's state (variables) -----*/
let scores; // Object key of 'p' -> player score
            // key of 't' -> tie; key of 'c' -> computer score
let results; // Object key of 'p' for the player result
            // values 'r' rock, 'p' -> paper, 's' -> scissors;
let winner; // String 'p' if the player wins, 't' for tie, 'c' if computer wins

/*----- cached element references -----*/
const pResultEl = document.getElementById('p-result');
const cResultEl = document.getElementById('c-result');

/*----- event listeners -----*/
document.querySelector('main').addEventListener('click', handleChoice); // name the event listener functions with the prefix 'handle' so you know it's an event listener function

/*----- functions -----*/
init()

//In response to user interaction (player makes a move), we update all impacted state, then finally, call render
function handleChoice(evt) {
    // We need to GUARD against doing anything unless the player clicks one of the three r p s buttons
    if (evt.target.tagName !== 'BUTTON') return; // to find out what the tagName name should be,  console.log(evt.target.tagName) and click around in devOps to find out what the tagNames are.
   //NOW WE NEED TO UPDATE OUR STATE
   //Player has made a choice so we need to update our results object
   results.p = evt.target.innerText.toLowerCase(); 
   results.c = getRandomRPS();
   winner = getWinner();
   scores[winner] += 1;
   render(); 
};

function getWinner() { // we need figure out the winning combinations and return p if the player won, c if the computer won and t if it's a tie. 
    //CHeck for tie
    if (results.p === results.c) return 't';
    //if what the player has beats what the computer has, the player wins.
    return RPS_LOOKUP[results.p].beats === results.c ? 'p' : 'c';
};

// Function to generate random computer choice by assigning the images object to a variable and using Math.random to generate a random number which we use to select the object index
function getRandomRPS() {
     const rps = Object.keys(RPS_LOOKUP);
     const rndIdx = Math.floor(Math.random() * rps.length);
     return rps[rndIdx];
    };

//INITIALISE ALL STATE THEN CALL RENDER
function init() {
  scores = {
    p: 0, 
    t: 0,
    c: 0
  };

  results = {
    p: 'r',
    c: 'r'
  };

  winner = 't';

  render();

};

function renderScores() {
    for (let key in scores) { // for in loop to iterate over keys in an object
      const scoreEl = document.getElementById(`${key}-score`);
      scoreEl.innerText = scores[key]; // use SQUARE BRACKETS instead of DOT NOTATION when you are referencing the key with a variable
    }
};   
function renderResults() {
  pResultEl.src = RPS_LOOKUP[results.p].img;
  cResultEl.src = RPS_LOOKUP[results.c].img;
};
 //Render function should transfer/visualise all state to the dom
function render() {
    renderScores();
    renderResults();
};
