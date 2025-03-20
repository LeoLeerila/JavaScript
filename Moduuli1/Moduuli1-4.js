'use strict';

function Moduuli1T4(){
    let name = prompt("Type your name");
    let house;

    switch(Math.floor(Math.random() * 4)){
        case 0:
            house = "Gryffindor"
            break;
        case 1:
            house = "Slytherin"
            break;
        case 2:
            house = "Hufflepuff"
            break;
        case 3:
            house = "Ravenclaw"
            break;        
    }

    document.querySelector("#Moduuli1-4").innerHTML = name + ", you are " + house
}