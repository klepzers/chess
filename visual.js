// DEFINING NECESSARY GLOBAL VARIABLES.
// Define board size.
let chessBoardSize = 600;
let squaresInRow = 8;

// Define canvas.
const canvas = document.getElementById("chess-board");
const ctx = canvas.getContext("2d");
// Make canvas size dependent on the board size.
canvas.width = chessBoardSize;
canvas.height = chessBoardSize;

// Define square size and amount.
let squareSize = chessBoardSize / squaresInRow;
let totalSquares = Math.pow(squaresInRow, 2);

// Define starting positions from logic.js.
let startingPositions = getStartingPositions();

let pieceImages = {};

function onReady() {
    drawChessGame();
    console.log(pieceImages);
    // Catch e when clicking on a piece.
    canvas.addEventListener("click", clickOnPiece);
}

function drawChessGame() {
    // Draws chess board.
    drawBoard();
    // Draw pieces for the beginning of the game.
    drawPieces();
    // Draw chess pieces.
    // drawPiece(); 
}

function drawBoard() {
    // Draw the board using a nested loop.
    for (let x = 0; x < totalSquares; x++) {
        for (let y = 0; y < totalSquares; y++) {
            if ((x + y) % 2 == 0) {
                ctx.fillStyle = "whitesmoke";
            } else {
                ctx.fillStyle = "grey";
            }
            let xOffset = x * squareSize;
            let yOffset = y * squareSize;
            ctx.fillRect(xOffset, yOffset, squareSize, squareSize);
        }
    }
}

// function drawInitialPieces() {
//     startingPositions.forEach(function (piece) {
//         drawPiece(piece);
//     })
// }

function drawPieces() {
    pieces.forEach(function (piece) {
        drawPiece(piece);
    })
}

// Getting mouse position when clicked.
function getMousePos(canvas, e) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    };
}



function loadImages() {

}

function drawPiece(piece) {
    var img = new window.Image();
    img.addEventListener("load", function () {
        ctx.drawImage(img, (piece.x - 1) * squareSize, (piece.y - 1) * squareSize);
    });
    const pieceFileNames = {
        Q: "Queen",
        K: "King",
        H: "Knight",
        R: "Rook",
        B: "Bishop",
        P: "Pawn"
    }

    //logic to make which piece is necessary
    let fileName = "assets/";
    let color = "";
    if (piece.isWhite) {
        color = "white";
    } else {
        color = "black";
    }
    fileName = fileName + color;
    fileName = fileName + pieceFileNames[piece.type]

    pieceImages[color + piece.type] = img;
    img.setAttribute("src", fileName + ".png");
}

//creating an array that saves old moves for re-drawing allowed move markers
// let oldAllowedPositions = [];
function clickOnPiece(e) {
    //getting mouse position on the clicked piece
    let mousePos = getMousePos(canvas, e);
    let boardFieldX = Math.ceil(mousePos.x / squareSize);
    let boardFieldY = Math.ceil(mousePos.y / squareSize);

    //returning array with allowed moves
    let allowedPositions = allowedMoves(boardFieldX, boardFieldY);

    // //drawing new squares to overdraw old allowed moves
    // oldAllowedPositions.forEach(position => {
    //     if ((position.x + position.y) % 2 == 0) {
    //         ctx.fillStyle = "whitesmoke";
    //     } else {
    //         ctx.fillStyle = "grey";
    //     }
    //     ctx.fillRect((position.x * squareSize - squareSize), (position.y * squareSize - squareSize), squareSize, squareSize);
    // })

    //re-draw the whole board
    drawChessGame();
    //iterating through allowed positions and drawing them on canvas
    allowedPositions.forEach(position => {
        //draw allowed position markers
        ctx.beginPath();
        ctx.arc((position.x * squareSize) - (1 / 2 * squareSize), (position.y * squareSize) - (1 / 2 * squareSize), 1 / 10 * squareSize, 0, 2 * Math.PI);
        ctx.fillStyle = "#e6ac00";
        ctx.fill();
    })
    // //saving old allowed positions for hiding them when clicked on next piece
    // oldAllowedPositions = allowedPositions;
}
