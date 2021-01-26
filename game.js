const User = require('./user.js')
const GamePiece = require('./gamePiece.js')

class Game {
    constructor() {
        this.Users = [new User("green"), new User("red"), new User("blue"), new User("yellow")];
        this.final_result = []

        this.current_player_index = 0;
    }

    //all the magic happens here
    play_game() {

        while (this.final_result.length != 3) {
            let current_player = this.Users[this.current_player_index]
            if (!current_player.check_won()) {
                current_player.play_turn()
                if (current_player.isHuman) {
                    //highlight the moveable pieces
                    //wait for onclick
                    let movement = getUserMove()
                } else {
                    //execute function
                    let movement = getComputerMover()
                }
            }
            this.current_player_index++
        }
        announceResult()
    }
    printInstruction() {

    }
}

