// Todo logic file for Toms.
function getStartingPositions() {
    return [
        // Type - Rook.
        {
            x: 1,
            y: 1,
            type: "R",
            isWhite: false
        },
        // Type - Knight.
        {
            x: Math.ceil(Math.random() * 8),
            y: Math.ceil(Math.random() * 8),
            type: "H",
            isWhite: false
        },
        // Type - King.
        {
            x: Math.ceil(Math.random() * 8),
            y: Math.ceil(Math.random() * 8),
            type: "K",
            isWhite: false
        },
        // Type - Qeen.
        {
            x: Math.ceil(Math.random() * 8),
            y: Math.ceil(Math.random() * 8),
            type: "Q",
            isWhite: false
        },

    ]
}
