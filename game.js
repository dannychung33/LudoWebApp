const User = require('./user.js')
const GamePiece = require('./gamePiece.js')

class Game{
    constructor(){
        this.Users = [new User("green"), new User("red"), new User("blue"), new User("yellow")];
        this.final_result = []

        this.current_player_index = 0;
    }

    //all the magic happens here
    play_game(){
        while(this.final_result.length != 3){
            if(!this.Users[this.current_player_index].check_won()){
                
            }
        }
    }
}

