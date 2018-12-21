const board = document.querySelector('.board');
const playBoard = [
  {}, {}, {}, {},
  {}, {}, {}, {},
  {}, {}, {}, {},
  {}, {}, {}, {}
];
const winningQuarto = [
  //vertical wins
  [0, 4, 8, 12],
  [1, 5, 9, 13],
  [2, 6, 10, 14],
  [3, 7, 11, 15],
  //horizontal wins
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11],
  [12, 13, 14, 15],
  //diagonal wins
  [0, 5, 10, 15],
  [3, 6, 9, 12]
];

let theElem;
let playerPiece = []

//MAKE THE GAME BOARD
function renderGameBoard(){
  for (let i = 0; i < 16; i += 1){
    let gameBoard = document.createElement('div');
    board.appendChild(gameBoard);
    gameBoard.setAttribute('class', 'play');
    gameBoard.id = i;
  }
}
renderGameBoard();


// MAKE THE PIECES
function makePieces() {
  const size = ['large', 'small'];
  const color = ['light', 'dark'];
  const shape = ['round', 'square'];
  const top = ['flat', 'hollow'];
  const pieces = [];

  for (let i = 0; i < size.length; i += 1){
    for (let j = 0; j < color.length; j += 1){
      for (let k = 0; k < shape.length; k += 1){
        for (let l = 0; l < top.length; l += 1){
          const piece = {
            size: size[i],
            color: color[j],
            shape: shape[k],
            top: top[l],
            id: `piece-${pieces.length}`
          }
          pieces.push(piece)
        }
      }
    }
  }
  return pieces;
}

function makePiecesHTML() {
  for (let i = 0; i < pieces.length; i++) {
    const piece = pieces[i];
    const pieceEl = document.createElement('div');
    pieceEl.className = `piece ${piece.size} ${piece.color} ${piece.shape} ${piece.top}`;
    pieceEl.id = `${piece.id}`;
    pieceEl.dataset.index = i;
    pieceEl.addEventListener("click", function(e) {
      let index = pieceEl.dataset;
      const gameBoard = document.querySelectorAll('.board')[0];
      gameBoard.appendChild(this);
      selectPosition(e.target);
     });
    document.body.appendChild(pieceEl);
  }
}

function selectPosition(x){
  piece = x
  board.querySelectorAll('.play').forEach(tile =>{
      tile.addEventListener('click', function(e){
      play = board.querySelectorAll('.play');
      play.forEach( each => {
        if(each.id === x.dataset.index){
          e.target.appendChild(piece);
          playBoard[e.target.id] = pieces[each.id]
					somethingElse();
        }
      });
    });
  });
}

let pieces = makePieces();
makePiecesHTML();

function somethingElse() {
	let combo = [];
	winningQuarto.forEach(comboIndexArr => {
		comboIndexArr.forEach(pieceIndex => {
			combo.push(playBoard[pieceIndex]);
		});
			if (!loopCheckWin(combo)) {
				window.alert("You Win!");
			}
			combo = [];
	});
}

//win condition
function loopCheckWin(combo) {
  const totals = {
    size: {
      large: 0,
      small: 0
    },
  	color: {
      light: 0,
      dark: 0
    },
    shape: {
      round: 0,
      square: 0
    },
		top: {
			flat: 0,
			hollow: 0
		}
  };
  for (let i = 0; i < combo.length; i += 1) {
    const piece = combo[i];
    const piecePropsArr = Object.keys(piece);
    for (let j = 0; j < piecePropsArr.length - 1; j += 1) {
      const prop = piecePropsArr[j]
      totals[prop][piece[prop]] += 1
			if( totals[prop][piece[prop]] === 4 ){
				return false;
			}
    }
  }
  return totals
}
