const User = require('./user.js')
const GamePiece = require('./gamePiece.js')

//should we have another class to handle the pre-game, game, and post-game status?
//so that when we enter constructor of game we know one of them is going to be initialized to new Human('color_human_selected')

module.exports = class Game {
    constructor() {
        // human_position is the index at which the users array will create a human user instead of bot
        let player1 = new User('green');
        let player2 = new User('red');
        let player3 = new User('blue');
        let player4 = new User('yellow');
        this.Users = [player1, player2, player3, player4];
        this.final_result = []

        this.current_player_index = 0;
    }

    //function called at the beginning of the game to read the color the user has chosen and assign the others as bots
    choose_color(){
        const color = localStorage.getItem("color");
        switch (color) {
            case "green":
                this.Users[0].type = "human";
                break;
      
            case "red":
                this.Users[1].type = "human";
                break;
      
            case "blue":
                this.Users[2].type = "human";
                break;
      
            case "yellow":
                this.Users[3].type = "human";
                break;
          }
    }

    //all the magic happens here
    play_game() {

        this.choose_color();

        while (this.final_result.length != 3) {
            if(this.current_player_index > 3){
                this.current_player_index = 0;
            }

            let current_player = this.Users[this.current_player_index]
            if (!current_player.check_won()) {
                current_player.play_turn()
            }
            this.current_player_index++
        }

        this.announceResult()
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

