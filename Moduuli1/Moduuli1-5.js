'use strict';

function Moduuli1T5(){
    let year = parseInt(prompt("Type a year"));

    if((year % 100) == 0){
        if((year % 400) == 0){
            document.querySelector("#Moduuli1-5").innerHTML = year.toString() + " is a leap year"
        }else{
            document.querySelector("#Moduuli1-5").innerHTML = year.toString() + " is not a leap year"
        }
    }else if((year % 4) == 0){
        document.querySelector("#Moduuli1-5").innerHTML = year.toString() + " is a leap year"
    }else{
        document.querySelector("#Moduuli1-5").innerHTML = year.toString() + " is not a leap year"
    }

}