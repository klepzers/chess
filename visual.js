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

function drawChessGame() {
    // Draws chess board.
    drawBoard();
    // Draw pieces for the beginning of the game.
    drawInitialPieces();
    // Draw chess pieces.
    // drawPiece();


    // Catch e when clicking on a piece.
    canvas.addEventListener("click", clickOnPiece);
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

function drawInitialPieces() {
    startingPositions.forEach(function(piece) {
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

function clickOnPiece(e) {
    let mousePos = getMousePos(canvas, e);
    console.log(mousePos);
    console.log(Math.ceil(mousePos.x / squareSize));
    console.log(Math.ceil(mousePos.y / squareSize));
}

function drawPiece(piece) {
    var img = new window.Image();
    img.addEventListener("load", function() {
        ctx.drawImage(img, (piece.x - 1) * squareSize, (piece.y - 1) * squareSize);
    });
    const pieceFileNames = {
            "Q": "Queen",
            "K": "King",
            "H": "Knight",
            "R": "Rook",
            "B": "Bishop",
            "P": "Pawn"
        }
        //logic to make which piece is necessary
    let fileName = "assets/";
    if (piece.isWhite) {
        fileName = fileName + "white";
    } else {
        fileName = fileName + "black";
    }
    fileName = fileName + pieceFileNames[piece.type]
    img.setAttribute("src", fileName + ".png");
}