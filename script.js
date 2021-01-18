//define board size
let chessBoardSize = 600;
let squaresInRow = 8;

//define canvas
const canvas = document.getElementById("chess-board");
const ctx = canvas.getContext("2d");

//make canvas size dependent on the board size
canvas.width = chessBoardSize;
canvas.height = chessBoardSize;

//define square size and amount for a particular chess board
let squareWidth = chessBoardSize / squaresInRow;
console.log(squareWidth);
let totalSquares = Math.pow(squaresInRow, 2);
console.log(totalSquares);

//draw the board using a nested loop
for (let x = 0; x < totalSquares; x++) {
    for (let y = 0; y < totalSquares; y++) {
        if ((x + y) % 2 == 0) {
            ctx.fillStyle = "whitesmoke";
        } else {
            ctx.fillStyle = "black";
        }
        let xOffset = x * squareWidth;
        let yOffset = y * squareWidth;
        ctx.fillRect(xOffset, yOffset, squareWidth, squareWidth);
    }
}

