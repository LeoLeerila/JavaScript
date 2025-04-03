'use strict';

function Moduuli2T4(){
    let numList = [];
    let currentNum;

    while(currentNum != 0){
        currentNum = parseInt(prompt("type a number"));
        numList.push(currentNum);
    }
    
    numList.sort(numSort);

    for(let i = 0; i < numList.length; i++){
        console.log(numList[i]);
    }
}

function numSort(a, b){
    return b - a;
}