'use strict';

function Moduuli2T3(){
    let dogList = [];
    
    for(let i = 1; i <= 6; i++){
        dogList.push(prompt(`type the name of a dog (${i}/${6})`));
    }
    dogList.reverse();

    const orderedList = document.createElement("ul");
    let listElement;
    for(let i = 0; i < 6; i++){
        listElement = document.createElement("li");
        listElement.appendChild(document.createTextNode(`${dogList[i]}`));
        orderedList.appendChild(listElement);
    }

    document.querySelector('#Moduuli2-3').appendChild(orderedList);
    
}