// Todo logic file for Toms.
function getStartingPositions() {
    return [{
            "isWhite": false,
            "type": "P",
            x: 1,
            y: 2
        },
        {
            "isWhite": false,
            "type": "P",
            x: 2,
            y: 2
        },
        {
            "isWhite": false,
            "type": "P",
            x: 3,
            y: 2
        },
        {
            "isWhite": false,
            "type": "P",
            x: 4,
            y: 2
        },
        {
            "isWhite": false,
            "type": "P",
            x: 5,
            y: 2
        },
        {
            "isWhite": false,
            "type": "P",
            x: 6,
            y: 2
        },
        {
            "isWhite": false,
            "type": "P",
            x: 7,
            y: 2
        },
        {
            "isWhite": false,
            "type": "P",
            x: 8,
            y: 2
        },
        {
            "isWhite": false,
            "type": "R",
            x: 1,
            y: 1
        },
        {
            "isWhite": false,
            "type": "H",
            x: 2,
            y: 1
        },
        {
            "isWhite": false,
            "type": "B",
            x: 3,
            y: 1
        },
        {
            "isWhite": false,
            "type": "Q",
            x: 4,
            y: 1
        },
        {
            "isWhite": false,
            "type": "K",
            x: 5,
            y: 1
        },
        {
            "isWhite": false,
            "type": "B",
            x: 6,
            y: 1
        },
        {
            "isWhite": false,
            "type": "H",
            x: 7,
            y: 1
        },
        {
            "isWhite": false,
            "type": "R",
            x: 8,
            y: 1
        },
        {
            "isWhite": true,
            "type": "P",
            x: 1,
            y: 7
        },
        {
            "isWhite": true,
            "type": "P",
            x: 2,
            y: 7
        },
        {
            "isWhite": true,
            "type": "P",
            x: 3,
            y: 7
        },
        {
            "isWhite": true,
            "type": "P",
            x: 4,
            y: 7
        },
        {
            "isWhite": true,
            "type": "P",
            x: 5,
            y: 7
        },
        {
            "isWhite": true,
            "type": "P",
            x: 6,
            y: 7
        },
        {
            "isWhite": true,
            "type": "P",
            x: 7,
            y: 7
        },
        {
            "isWhite": true,
            "type": "P",
            x: 8,
            y: 7
        },
        {
            "isWhite": true,
            "type": "R",
            x: 1,
            y: 8
        },
        {
            "isWhite": true,
            "type": "H",
            x: 2,
            y: 8
        },
        {
            "isWhite": true,
            "type": "B",
            x: 3,
            y: 8
        },
        {
            "isWhite": true,
            "type": "Q",
            x: 4,
            y: 8
        },
        {
            "isWhite": true,
            "type": "K",
            x: 5,
            y: 8 // Original 5 8
        },
        {
            "isWhite": true,
            "type": "B",
            x: 6,
            y: 8
        },
        {
            "isWhite": true,
            "type": "H",
            x: 7,
            y: 8
        },
        {
            "isWhite": true,
            "type": "R",
            x: 8,
            y: 8
        }
    ]
}
let pieces = getStartingPositions();
let currentMoveIsWhite = true;

// TODO Create function get piece from it's position.
function getPieceFromPosition(x, y){
    for (const piece of pieces) {
        if (piece.x == x && piece.y == y) {
            return piece;
        }
    }
}
console.log(allowedMoves(5,8));

function positionHasNotFriendlyPiece(position){
    const piece = getPieceFromPosition(position.x, position.y);

    if (typeof piece === "object" && piece.isWhite == currentMoveIsWhite ) {
        return false;
    }
    return typeof position === "object";
}

function positionHasNotPiece(position){
    const piece = getPieceFromPosition(position.x, position.y);

    if (typeof piece === "object") {
        return false;
    }
    return typeof position === "object";
}

function positionHasEnemyPiece(position){
    // TODO make this function work again
    const piece = getPieceFromPosition(position.x, position.y);
    if (typeof piece === "object" && piece.isWhite != currentMoveIsWhite) {
        return true;
    }
    return false;
};

function positionWithinBoard(position){
    if (position.x > 8 || position.x < 1 || position.y > 8 || position.y < 1) {
        return false;
    }
    return typeof position === "object";
}

function allowedMoves(x,y) {
    let piece = getPieceFromPosition(x,y);
    let allowedPositions = [];
    if (piece.isWhite != currentMoveIsWhite){
        // TODO remove this when enemy is trying check.
        return [];
    }
    // This is KNIGHT.
    if (piece.type == "H") {
        allowedPositions.push({"x" : piece.x - 1, "y" : piece.y -2}, {"x" : piece.x + 1, "y" : piece.y -2}, {"x" : piece.x + 2, "y" : piece.y -1}, {"x" : piece.x - 2, "y" : piece.y -1} );
        allowedPositions = allowedPositions.filter(positionHasNotFriendlyPiece);
    }
    // This is PAWN.
    if (piece.type == "P") {
        let dy = 1;

        if (currentMoveIsWhite){
             dy = -1;
        }

        allowedPositions.push({"x" : piece.x ,"y" : piece.y + dy });

        // First move can go 1 or 2 steps for P. Wrong color is filtered later.
        if (y == 7 || y == 2) {
            allowedPositions.push({"x" : piece.x ,"y" : piece.y + 2*dy });
        }
        //allowedPositions.push({"x" : piece.x + 1,"y" : piece.y + dy }, {"x" : piece.x - 1,"y" : piece.y + dy });
        allowedPositions = allowedPositions.filter(positionHasNotPiece); // TODO possibly redundant

        if (positionHasEnemyPiece({"x" : piece.x + 1 ,"y" : piece.y + dy})) {
           allowedPositions.push({"x" : piece.x + 1,"y" : piece.y + dy });
        }
        if (positionHasEnemyPiece({"x" : piece.x - 1 ,"y" : piece.y + dy})) {
            allowedPositions.push({"x" : piece.x - 1,"y" : piece.y + dy });
         }
    }
    // TODO remove illegal moves for P (fake killing and obstacle)

    // This is KING.
    if (piece.type == "K") {
        let dy = 1;

        if (currentMoveIsWhite) {
            dy = -1;
        }

        allowedPositions.push(
        {"x" : piece.x ,"y" : piece.y - dy },
        {"x" : piece.x + 1,"y" : piece.y - dy },
        {"x" : piece.x - 1,"y" : piece.y - dy },
        {"x" : piece.x + 1,"y" : piece.y},
        {"x" : piece.x - 1,"y" : piece.y},
        {"x" : piece.x + 1,"y" : piece.y + dy},
        {"x" : piece.x,"y" : piece.y + dy},
        {"x" : piece.x - 1,"y" : piece.y + dy});

        if (positionHasEnemyPiece({"x" : piece.x ,"y" : piece.y - dy })) {
            allowedPositions.push({"x" : piece.x ,"y" : piece.y - dy });
         }
        if (positionHasEnemyPiece({"x" : piece.x + 1,"y" : piece.y - dy })) {
            allowedPositions.push({"x" : piece.x + 1,"y" : piece.y - dy });
         }
        if (positionHasEnemyPiece({"x" : piece.x - 1,"y" : piece.y - dy })) {
            allowedPositions.push({"x" : piece.x - 1,"y" : piece.y - dy });
         }
        if (positionHasEnemyPiece({"x" : piece.x + 1,"y" : piece.y})) {
            allowedPositions.push({"x" : piece.x + 1,"y" : piece.y});
         }
        if (positionHasEnemyPiece({"x" : piece.x - 1,"y" : piece.y})) {
            allowedPositions.push({"x" : piece.x - 1,"y" : piece.y});
         }
        if (positionHasEnemyPiece({"x" : piece.x + 1,"y" : piece.y + dy})) {
            allowedPositions.push({"x" : piece.x + 1,"y" : piece.y + dy});
         }
        if (positionHasEnemyPiece({"x" : piece.x,"y" : piece.y + dy})) {
            allowedPositions.push({"x" : piece.x,"y" : piece.y + dy});
         }
        if (positionHasEnemyPiece({"x" : piece.x - 1,"y" : piece.y + dy})) {
            allowedPositions.push({"x" : piece.x - 1,"y" : piece.y + dy});
         }
         allowedPositions = allowedPositions.filter(positionHasNotPiece);
    }

    return allowedPositions.filter(positionWithinBoard);
}
