// call this function to change the image src for a particular gamepiece

module.exports = function minify(gamePiece) {
    if (gamePiece.color == 'red') {
        gamePiece.image.src = "./assets/RedPiece48x48.png"
    }
    if (gamePiece.color == 'green') {
        gamePiece.image.src = "./assets/GreenPiece48x48.png"
    }
    if (gamePiece.color == 'yellow') {
        gamePiece.image.src = "./assets/YellowPiece48x48.png"
    }
    if (gamePiece.color == 'blue') {
        gamePiece.image.src = "./assets/BluePiece48x48.png"
    }

}
