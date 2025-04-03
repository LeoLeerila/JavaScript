'use strict';

function even(numArray){
    let newNumArray = [];
    for(let i = 0; i < numArray.length; i++){
        if(numArray[i] % 2 === 0){
            newNumArray.push(numArray[i])
        }
    }
    return newNumArray
}

function Moduuli2T9(){
    let numArray = [1,2,3,4,5,6,7,8,9];
    let newNumArray = even(numArray);
    console.log(numArray);
    console.log(newNumArray);
}