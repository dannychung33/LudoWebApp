<<<<<<< HEAD
function rollDice(){
=======
module.exports = function rollDice(){
>>>>>>> 97d61d79421d1d6b1a3fd305f311be6d947f98fc
    const die1 = document.getElementById("die1");

    const status = document.getElementById("status");
    let d1 = Math.floor(Math.random() * 6) + 1;
    
    die1.innerHTML = d1;

    status.innerHTML = "You rolled " + d1 + ".";
<<<<<<< HEAD
    
=======
    return d1;
>>>>>>> 97d61d79421d1d6b1a3fd305f311be6d947f98fc
}