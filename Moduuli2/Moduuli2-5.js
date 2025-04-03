'use strict';

function Moduuli2T5(){
    let numList = [];
    let currentNum;
    let stop = false;

    while(!stop){
        currentNum = parseInt(prompt("type a number"));
        
        if(numList.includes(currentNum)){
            stop = true
        }else{
            numList.push(currentNum);
        }
    }
    
    numList.sort(numSort);

    for(let i = 0; i < numList.length; i++){
        console.log(numList[i]);
    }
}

function numSort(a, b){
    return b - a;
}