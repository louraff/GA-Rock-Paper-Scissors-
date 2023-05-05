/*----- constants -----*/
const AUDIO = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-simple-countdown-922.mp3');
const RPS_LOOKUP = { //Object so we can look up the proper image based on whether it is r p or s 
    r: 'imgs/rock.png',
    p: 'imgs/paper.png',
    s: 'imgs/scissors.png'
};

/*----- app's state (variables) -----*/
let scores; // Object key of 'p' -> player score
            // key of 't' -> tie; key of 'c' -> computer score
let results; // Object key of 'p' for the player result
            // values 'r' rock, 'p' -> paper, 's' -> scissors;
let winner; // String 'p' if the player wins, 't' for tie, 'c' if computer wins

/*----- cached element references -----*/


/*----- event listeners -----*/


/*----- functions -----*/
init()

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
      scoreEl.innerText = scores[key];
    }
};   
function renderResults() {
  
};

function render() {
    renderScores();
    renderResults();
};


