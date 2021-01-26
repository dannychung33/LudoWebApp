let dice = document.getElementById('dice');
var outputDiv = document.getElementById('diceResult');

function rollDice() {
    let result = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    dice.dataset.side = result;
    dice.classList.toggle("reRoll");

    console.log(result);

    return result
}

dice.addEventListener("click", rollDice);
