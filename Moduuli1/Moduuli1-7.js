'use strict';

function dicesum(count){
    let sum = 0
    for(let i = 0; i <= count; i++){
        sum += Math.floor(Math.random() * 6 + 1)
    }
    return sum
}

function Moduuli1T7(){
    document.querySelector("#Moduuli1-7").innerHTML = dicesum(parseInt(prompt("Type the number of dice")));
}