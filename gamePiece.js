module.exports = class GamePiece {
  constructor(color, id) {
    this.color = color;
    this.is_complete = false;
    this.current_global_spot = 0;
    this.id = id
    //1, 2, 3, .. 52
    //1: [140, 230]
    //2: [230, 345]
  }
  //object that u want to move
  move(item, n) {
    map = {
      'left': leftSlideMove(),
      'right': rightSlideMove(),
      'down': downSlideMove(),
      'up': upSlideMove()
    }
    for (let i = 1; i <= n; i++) {
      map[PossibleMovements[this.current_global_spot + i]]
    }
  }
}
