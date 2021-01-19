function getStartingPositions() {
    return [
        {
            x: 1,
            y: 1,
            type: "R",
            isWhite: false
        },
        {
            x: Math.ceil(Math.random() * 8),
            y: Math.ceil(Math.random() * 8),
            type: "H",
            isWhite: false
        },
        {
            x: Math.ceil(Math.random() * 8),
            y: Math.ceil(Math.random() * 8),
            type: "K",
            isWhite: false
        },
        {
            x: Math.ceil(Math.random() * 8),
            y: Math.ceil(Math.random() * 8),
            type: "Q",
            isWhite: true
        },
    ]
}