'use strict';

const targetimage = document.querySelector("#target");
const trigger = document.querySelector("#trigger");

trigger.addEventListener("mouseenter", mouseenterFunction);
trigger.addEventListener("mouseleave", mouseleaveFunction);


function mouseenterFunction(){
    targetimage.setAttribute("src", "img/picB.jpg")
}

function mouseleaveFunction(){
    targetimage.setAttribute("src", "img/picA.jpg")
}