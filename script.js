const toggler = document.querySelector(".togglerbtn");
toggler.addEventListener("click",function() {
    document.querySelector("#sidebar").classList.toggle("collapsed");
    
})

function turn() {
    document.getElementById("sidebar-button").style.transform = "rotate(180deg)";
}












/*

let stateLife = "life";
let stateLove = "love";
let stateEverything = "everything";
let stateILoveMusic = "i love music";

let speed = 100;


let i = -1;

let cursor = document.getElementById("cursor");

function typeAboutMusic() {
    if (i > stateLife){
    document.getElementById("third-word").innerHTML -= document.getElementById("site_heading").innerHTML.charAt(i);
    i
    setTimeout(typeAboutMusic, speed);
    }
    
}

window.onload = typeAboutMusic; */