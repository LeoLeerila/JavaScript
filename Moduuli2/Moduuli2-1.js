'use strict';

function Moduuli2T1(){
    let numArray = [];
    
    for(let i = 1; i < 6; i++){
        numArray.push(prompt(`Write a number (${i}/5)`));
    }

    for(let i = numArray.length - 1; i >= 0; i--){
        console.log(numArray[i]);
    }
}