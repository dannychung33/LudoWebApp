module.exports = class GamePiece {
  constructor(color) {
    this.color = color;
    this.is_complete = false;
    this.current_global_spot = 0; 
    //1, 2, 3, .. 52
    //1: [140, 230]
    //2: [230, 345]
  }
}