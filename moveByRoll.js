const index = require('./index')

module.exports = function moveByRoll(moves, direction) {
    let map = {
        'l': leftSlideMove(),
        'r': rightSlideMove(),
        'u': upSlideMove(),
        'd': downSlideMove()
    }
    for (let i = 0; i < moves; i++) {
        map[direction]
    }
}
    // if (direction == 'l') {
    //     index.leftSlideMove();
    // }
    // if (direction == 'r') {
    //     index.rightSlideMove();
    // }
    // if (direction == 'u') {
    //     index.upSlideMove();
    // }
    // if (direction == 'd') {
    //     index.downSlideMove();
    // }
