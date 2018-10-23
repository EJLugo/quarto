const board = document.querySelector('.board');


//MAKE THE GAME BOARD

function renderGameBoard(){
  for (let i = 0; i < 16; i += 1){
    let gameBoard = document.createElement('div');
    board.appendChild(gameBoard);
    gameBoard.setAttribute('class', 'play');
  }
}
renderGameBoard();


// MAKE THE PIECES USING THE HIGH-LOW DECK CARD LOGIC

function makePieces() {
  const size = ['large', 'small'];
  const color = ['light wood', 'dark wood'];
  const shape = ['round', 'square'];
  const top = ['flat', 'hollow'];
  const pieces = [];

  for (let i = 0; i < size.length; i += 1){
    for (let j = 0; j < color.length; j += 1){
      for (let k = 0; k < shape.length; k += 1){
        for (let l = 0; l < top.length; l +=1){
          const piece = {
            size: size[i],
            color: color[j],
            shape: shape[k],
            top: top[l]
          }
          pieces.push(piece)
        }
      }
    }
  }
  return pieces;
}
console.log(makePieces());
