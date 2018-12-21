# quarto
quarto game

## Functional Specs

- Quarto is a two-player game
- Quarto is played on a four-by-four board with 16 pieces shared by both players
- Each piece has four characteristics:
        - height (Tall or Short)
        - color  (Dark or Light)
        - top    (Flat-top or Hollow)
        - shape  (Square or Round)
- A player wins by matching pieces with any four characteristics
- Players should be prompted to pick a piece for their opponent to play
- Players can place their piece on any empty square



## MVP

### STARTING
- The four-by-four board starts off empty

### MOVING
- Player Two chooses a piece for Player One to play
- Player One then chooses a piece for Player Two to play

### WIN/ LOSE/ DRAW
- A player wins when they match any four pieces in a line horizontally, vertically, or diagonally
- A draw results when all 16 pieces have placed on the board and no player has matched four traits in a line


##Why Quarto?

- I discovered Quarto while working for the now non-existent game store Marbles: The Brain Store.
- Combining the fun of Connect Four and the strategy of Chess, it quickly became one of my favorite games not only to recommend and sell, but to play.

### Game in progress screenshot
![](https://github.com/EJLugo/quarto/blob/master/quarto-screenshot.png)

## Technologies Used
* Coded in: HTML, CSS, JavaScript
* Deployed using Surge

## Making the pieces
All 16 pieces are unique, but have to share similarities in some way to other pieces. I decided to represent these as objects so that I would be able to compare the values when they are placed on the board. Rather than hardcode each piece individually, I decided to use a set of four nested for-loops:

```function makePieces() {
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
```
