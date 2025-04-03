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

    console.log(numList[i]);
    
}

function numSort(a, b){
    return a - b;
}