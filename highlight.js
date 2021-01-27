module.exports = function highlight(gamePiece) {
    if (gamePiece.color == 'blue') {
        gamePiece.image.src = "assets/BluePiece96x96Transparent.png";
    }
    if (gamePiece.color == 'red') {
        gamePiece.image.src = "assets/RedPiece96x96Transparent.png";
    }
    if (gamePiece.color == 'yellow') {
        gamePiece.image.src = "assets/YellowPiece96x96Transparent.png";
    }
    if (gamePiece.color == 'green') {
        gamePiece.image.src = "assets/GreenPiece96x96Transparent.png";
    }
}
