module.exports = function rollDice(){
    const die1 = document.getElementById("die1");

    const status = document.getElementById("status");
    let d1 = Math.floor(Math.random() * 6) + 1;
    
    die1.innerHTML = d1;

    status.innerHTML = "You rolled " + d1 + ".";
    return d1;
}