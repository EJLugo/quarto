// const board = document.querySelector('.board');
const board = Array.from({length: 4}, ()=> Array.from({length: 4}, () => null))

let theElem;
let playerPiece = []

//MAKE THE GAME BOARD
function renderGameBoard(){
  for (let i = 0; i < 16; i += 1){
    let gameBoard = document.createElement('div');
    // board.appendChild(gameBoard);
    gameBoard.setAttribute('class', 'play');
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
// console.log(makePieces());

function makePiecesHTML() {
  for (let i = 0; i < pieces.length; i++) {
    const piece = pieces[i];
    const pieceEl = document.createElement('div');
    pieceEl.className = `piece ${piece.size} ${piece.color} ${piece.shape} ${piece.top}`;
    pieceEl.id = `${piece.id}`;
    pieceEl.dataset.index = i;
    pieceEl.addEventListener("click", function(e) {
      // take the object out of the array
      let index = pieceEl.dataset.index;
      const gameBoard = document.querySelectorAll('.board')[0];
      gameBoard.appendChild(this);
      theElem = this;
      pieces.splice(index, 1);
      console.log(this);
     });
    document.body.appendChild(pieceEl);
  }
}

let pieces = makePieces();
makePiecesHTML();
