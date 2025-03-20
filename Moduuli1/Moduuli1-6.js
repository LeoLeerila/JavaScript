'use strict';

function Moduuli1T6(){
    if(confirm("Should I calculate the square root?")){
        let num = parseInt(prompt("Type a number"))
        if(num < 0){
            document.querySelector("#Moduuli1-6").innerHTML = "The square root of a negative number is not defined";
        }else{
            document.querySelector("#Moduuli1-6").innerHTML = Math.sqrt(num).toString();
        }
    }else{
        document.querySelector("#Moduuli1-6").innerHTML = "The square root is not calculated.";
    }
}