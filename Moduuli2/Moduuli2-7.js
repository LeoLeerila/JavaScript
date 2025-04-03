'use strict';

function diceroll(maxRoll){
    let varus = Math.floor(Math.random() * maxRoll + 1)
    return varus
}

function Moduuli2T7(){
    let diceMaxRoll = parseInt(prompt("type the number of sides on the dice"));
    let diceList = [];
    let varus;
    while(!diceList.includes(diceMaxRoll)){
        varus = diceroll(diceMaxRoll)
        diceList.push(varus);
    }

    const orderedList = document.createElement("ul");
    let listElement;
    for(let i = 0; i < diceList.length; i++){
        listElement = document.createElement("li");
        listElement.appendChild(document.createTextNode(`${diceList[i]}`));
        orderedList.appendChild(listElement);
    }

    document.querySelector('#Moduuli2-7').appendChild(orderedList);
}