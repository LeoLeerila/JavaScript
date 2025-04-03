'use strict';

function Moduuli2T2(){
    let participantCount = parseInt(prompt("type the number or participants"));
    let participantList = [];
    
    for(let i = 1; i <= participantCount; i++){
        participantList.push(prompt(`type the name of the participant (${i}/${participantCount})`));
    }
    participantList.sort();

    const orderedList = document.createElement("ol");
    let listElement;
    for(let i = 0; i < participantCount; i++){
        listElement = document.createElement("li");
        listElement.appendChild(document.createTextNode(`${participantList[i]}`));
        orderedList.appendChild(listElement);
    }

    document.querySelector('#Moduuli2-2').appendChild(orderedList);
    
}