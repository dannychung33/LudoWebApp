const User = require('./user.js')
const GamePiece = require('./gamePiece.js')

//should we have another class to handle the pre-game, game, and post-game status?
//so that when we enter constructor of game we know one of them is going to be initialized to new Human('color_human_selected')

module.exports = class Game {
    constructor(human_position) {
        // human_position is the index at which the users array will create a human user instead of bot
        let player1 = new Bot('green');
        let player2 = new Bot('red');
        let player3 = new Bot('blue');
        let player4 = new Bot('yellow');
        this.Users = [player1, player2, player3, player4];
        let color = ['green', 'red', 'blue', 'yellow']
        this.Users[human_position] = new Human(color[human_position])
        this.final_result = []

        this.current_player_index = 0;
    }

    //all the magic happens here
    play_game() {

        while (this.final_result.length != 3) {
            let current_player = this.Users[this.current_player_index]
            if (!current_player.check_won()) {
                current_player.play_turn()

            }
            this.current_player_index++
        }
        announceResult()
    }
    announceResult() {
        for (let i = 0; i < this.Users.length; i++) {
            if (!this.final_result.includes(this.Users[i])) {
                this.final_result.push(this.Users[i])
            }
        }
        this.final_result.forEach((user, index) => {
            // {user}, You have won the {index + 1} place
        })
    }
}

