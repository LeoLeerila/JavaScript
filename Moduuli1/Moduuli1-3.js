'use strict';

function Moduuli1T3(){
    let N1 = parseInt(prompt("Type a number(1)"));
    let N2 = parseInt(prompt("Type a number(2)"));
    let N3 = parseInt(prompt("Type a number(3)"));

    let sum = N1 + N2 + N3;
    let prod = N1 * N2 * N3;
    let avg = (N1 + N2 + N3) / 3;

    document.querySelector('#Moduuli1-3-N1').innerHTML = N1;
    document.querySelector('#Moduuli1-3-N2').innerHTML = N2;
    document.querySelector('#Moduuli1-3-N3').innerHTML = N3;
    document.querySelector('#Moduuli1-3-sum').innerHTML = sum;
    document.querySelector('#Moduuli1-3-prod').innerHTML = prod;
    document.querySelector('#Moduuli1-3-avg').innerHTML = avg;

}