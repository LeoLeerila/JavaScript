'use strict';

function dicesum(count){
    let sum = 0
    for(let i = 0; i <= count; i++){
        sum += Math.floor(Math.random() * 6 + 1)
    }
    return sum
}

function Moduuli1T10(){
    let dicenum = parseInt(prompt("Type the number of dice"));
    let looksum = parseInt(prompt("Type the sum to look for"));
    let correctsumcount = 0;
    let simcount = 1000000;

    for(let i = 0; i <= simcount; i++){
        if(dicesum(dicenum) == looksum){
            correctsumcount++
        }
    }
    let probability = simcount / correctsumcount;
    document.querySelector("#Moduuli1-10").innerHTML = `Probability to get sum ${looksum} with ${dicenum} dice is ${probability.toFixed(2)}%`

}