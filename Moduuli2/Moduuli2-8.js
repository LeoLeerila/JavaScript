'use strict';

function concat(list){
    let newstring = "";

    for(let i = 0; i < list.length; i++){
        newstring += list[i];
    }

    document.querySelector('#Moduuli2-8').innerHTML = newstring;
}

function Moduuli2T8(){
    let oldlist = ["Johnny","DeeDee","Joey","Marky"];
    concat(oldlist);
}