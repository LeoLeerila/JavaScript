'use strict';

document.querySelector("#start").addEventListener("click", calculate);
const result = document.querySelector("#result");
const operator = document.querySelector("#operation");
const num1element = document.querySelector("#num1");
const num2element = document.querySelector("#num2");



function calculate(){
    switch(operator.selectedOptions[0].value){
        case "add":
            add(parseInt(num1element.value), parseInt(num2element.value));
        break;
        case "sub":
            sub(parseInt(num1element.value), parseInt(num2element.value));
        break;
        case "multi":
            multi(parseInt(num1element.value), parseInt(num2element.value));
        break;
        case "div":
            div(parseInt(num1element.value), parseInt(num2element.value));
        break;
    }
}

function add(num1, num2){
    result.innerText = num1 + num2
}

function sub(num1, num2){
    result.innerText = num1 - num2
}

function multi(num1, num2){
    result.innerText = num1 * num2
}

function div(num1, num2){
    result.innerText = num1 / num2
}