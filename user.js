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
<<<<<<< HEAD
=======
    this.type = "bot";
>>>>>>> 92667d4208e6cb536bcad3a62112bf156575f85d
    this.gamePieces = [new GamePiece(color), new GamePiece(color), new GamePiece(color), new GamePiece(color)];
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

  //checks if the user has won, returns true if he has, false otherwise
  check_won() {
    for (let i = 0; i < this.gamePieces.length; i++) {
      if (!this.gamePieces[i].is_complete) {
        return false;
      }
    }
    return true;
  }

  //checks if all the pieces for the user are at home
  //returns true if they are all home, false otherwise
  check_all_home() {
    for (let i = 0; i < this.gamePieces.length; i++) {
      if (this.gamePieces[i].current_global_spot != 0) {
        return false;
      }
    }
    return true;
  }

  //returns an array of game pieces that the user can move with the current chance
  //will add "blocking" later
  pieces_that_can_use_roll(chance) {
    let capable_pieces = [];
    for (let i = 0; i < this.gamePieces.length; i++) {
      if (!this.gamePieces[i].is_complete && this.gamePieces[i].current_global_spot >= this.strip_start_position && this.gamePieces[i].current_global_spot + chance > this.end_position) {
        continue;
      }
      else {
        capable_pieces.push(this.gamePieces[i]);
      }
    }

    return capable_pieces;
  }

  //roll a die, decide how to move, make movement
  play_turn() {
    let chance = rollDice();

    //checking if the user can even play a turn
    if (chance != 6 && this.check_all_home()) {
      console.log("we will have to pass you");
      return;
    }

    //checking if the user has any pieces that he can move
    let capable_pieces = this.pieces_that_can_use_roll(chance);
    if (capable_pieces.length == 0) {
      console.log("we will have to pass you");
      return;
    }
    //if it gets here without returning: the user have at least a move available. this is where it diverge to ask for a move from user or execute automatically for a bot.

  }

<<<<<<< HEAD
=======
  //function that allows the human to move
  human_move(){
    
  }

>>>>>>> 92667d4208e6cb536bcad3a62112bf156575f85d
}
