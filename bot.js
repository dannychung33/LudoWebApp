
module.exports = class Bot extends User {
  constructor(color) {
    this.color = color;
    this.gamePieces = [new GamePiece(color), new GamePiece(color), new GamePiece(color), new GamePiece(color)];
    this.isHuman = false
    switch (color) {
      case "green":
        this.start_global_id = 1;
        this.turning_position = 50;
        this.end_position = 57;
        this.strip_start_position = 52;
        break;

      case "red":
        this.start_global_id = 14;
        this.turning_position = 12;
        this.end_position = 63;
        this.strip_start_position = 58;
        break;

      case "blue":
        this.start_global_id = 27;
        this.turning_position = 25;
        this.end_position = 69;
        this.strip_start_position = 64;
        break;

      case "yellow":
        this.start_global_id = 40;
        this.turning_position = 38;
        this.end_position = 75;
        this.strip_start_position = 70;
        break;
    }
  }
  getMove() {

  }
}
