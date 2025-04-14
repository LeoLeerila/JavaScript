'use strict';

document.querySelector("#start").addEventListener("click", calculate);
const result = document.querySelector("#result");
const calculation = document.querySelector("#calculation");



function calculate(){
    let nums;
    if(calculation.value.includes("+")){
        nums = calculation.value.split("+")
        add(parseInt(nums[0]), parseInt(nums[1]));
    }else if(calculation.value.includes("-")){
        nums = calculation.value.split("-")
        sub(parseInt(nums[0]), parseInt(nums[1]));
    }else if(calculation.value.includes("*")){
        nums = calculation.value.split("*")
        multi(parseInt(nums[0]), parseInt(nums[1]));
    }else if(calculation.value.includes("/")){
        nums = calculation.value.split("/")
        div(parseInt(nums[0]), parseInt(nums[1]));
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