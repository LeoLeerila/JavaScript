'use strict';

function diceroll(){
    let varus = Math.floor(Math.random() * 6 + 1)
    return varus
}

function Moduuli2T6(){
    let diceList = [];
    let varus;
    while(!diceList.includes(6)){
        varus = diceroll()
        diceList.push(varus);
    }

    const orderedList = document.createElement("ul");
    let listElement;
    for(let i = 0; i < diceList.length; i++){
        listElement = document.createElement("li");
        listElement.appendChild(document.createTextNode(`${diceList[i]}`));
        orderedList.appendChild(listElement);
    }

    document.querySelector('#Moduuli2-6').appendChild(orderedList);
    
}