'use strict';

function Moduuli1T8(){
    let startyear = parseInt(prompt("Type start year"));
    let endyear = parseInt(prompt("Type end year"));

    for(let year = startyear; year <= endyear; year++){
        if((year % 100) == 0){
            if((year % 400) == 0){
                let li = document.createElement("li");
                li.innerText = year;
                document.querySelector("#Moduuli1-8").appendChild(li);
            }
        }else if((year % 4) == 0){
            let li = document.createElement("li");
            li.innerText = year;
            document.querySelector("#Moduuli1-8").appendChild(li);
        }
    }
    
}