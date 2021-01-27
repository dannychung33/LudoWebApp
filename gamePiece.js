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
}
