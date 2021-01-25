const initLocal = require('./initialLocation.js')
const gamePiece = require('./gamePiece.js')
const rollDice = require('./rollDice.js')

//possible movements for the coins
PossibleMovements = {
  1: 'right',
  2: 'right',
  3: 'right',
  4: 'right',
  5: 'up-right',
  6: 'up',
  7: 'up',
  8: 'up',
  9: 'up',
  10: 'up',
  11: 'right',
  12: 'right',
  13: 'down',
  14: 'down',
  15: 'down',
  16: 'down',
  17: 'down',
  18: 'down-right',
  19: 'right',
  20: 'right',
  21: 'right',
  22: 'right',
  23: 'right',
  24: 'down',
  25: 'down',
  26: 'left',
  27: 'left',
  28: 'left',
  29: 'left',
  30: 'left',
  31: 'down-left',
  32: 'down',
  33: 'down',
  34: 'down',
  35: 'down',
  36: 'down',
  37: 'left',
  38: 'left',
  39: 'up',
  40: 'up',
  41: 'up',
  42: 'up',
  43: 'up',
  44: 'up-left',
  45: 'left',
  46: 'left',
  47: 'left',
  48: 'left',
  49: 'up',
  50: 'up',
  51: 'right',
  52: 'right',
  53: 'right',
  54: 'right',
  55: 'right',
  56: 'right',
  57: 'right',
  58: 'down',
  59: 'down',
  60: 'down',
  61: 'down',
  62: 'down',
  63: 'down',
  64: 'left',
  65: 'left',
  66: 'left',
  67: 'left',
  68: 'left',
  69: 'left',
  70: 'up',
  72: 'up',
  73: 'up',
  74: 'up',
  75: 'up'
}

// console.log(initLocal)
module.exports = class User {
  constructor(color) {
    this.color = color;
    this.gamePieces = [new GamePiece(color), new GamePiece(color), new GamePiece(color), new GamePiece(color)];
    switch (color) {
      case "green":
        this.start_global_id = 1;
        this.turning_position = 50;
        this.end_position = 57;
        break;

      case "red":
        this.start_global_id = 14;
        this.turning_position = 12;
        this.end_position = 63;
        break;

      case "blue":
        this.start_global_id = 27;
        this.turning_position = 25;
        this.end_position = 69;
        break;

      case "yellow":
        this.start_global_id = 40;
        this.turning_position = 38;
        this.end_position = 75;
        break;
    }
  }

  //checks if the user has won, returns true if he has, false otherwise
  check_won() {
    for (let i = 0; i < this.gamePieces.length; i++) {
      if (!this.gamePieces[i].is_complete) {
        return false;
      }
    }
    return true;
  }

  //roll a die, decide how to move, make movement
  play_turn() {
    let chance = rollDice();

  }

  write() {
    console.log('i am user')
  }
}


