function rollDice(){
    const die1 = document.getElementById("die1");
    const die2 = document.getElementById("die2");
    const status = document.getElementById("status");
    let d1 = Math.floor(Math.random() * 6) + 1;
    let d2 = Math.floor(Math.random() * 6) + 1;
    let diceTotal = d1 + d2;
    die1.innerHTML = d1;
    die2.innerHTML = d2;
    status.innerHTML = "You rolled " + diceTotal + ".";
    
}