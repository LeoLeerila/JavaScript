'use strict';

function Moduuli1T9(){
    let num = parseInt(prompt("Type a number"))
    let modulocount = 0
    for(let i = 0; i <= num; i++){
        if(num % i == 0){
            modulocount++
        }
    }
    if(modulocount > 2){
        document.querySelector("#Moduuli1-9").innerHTML = "Not a prime number"
    }else{
        document.querySelector("#Moduuli1-9").innerHTML = "Prime number"
    }
}