const initLocal = require('./initialLocation.js')
const gamePiece = require('./gamePiece.js')
const rollDice = require('./rollDice.js')

// console.log(initLocal)
module.exports = class User {
  constructor(color) {
    this.color = color;
    this.gamePieces = [new GamePiece(color), new GamePiece(color), new GamePiece(color), new GamePiece(color)];
    switch(color){
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
  check_won(){
    for(let i=0; i<this.gamePieces.length; i++){
      if(!this.gamePieces[i].is_complete){
        return false;
      }
    }
    return true;
  }

  //roll a die, decide how to move, make movement
  play_turn(){
    let chance = rollDice();
    
  }

  write() {
    console.log('i am user')
  }
}

