const index = require('./index')

function moveByRoll(moves, direction){
    if(direction = 'l'){
        index.leftSlideMove();
    }
    if(direction = 'r'){
        index.rightSlideMove();
    }
    if(direction = 'u'){
        index.upSlideMove();
    }
    if(direction = 'd'){
        index.downSlideMove();
    }

}