const toggler = document.querySelector("#sidebar-button");
toggler.addEventListener("click",function() {
    document.querySelector(".sidebars").classList.toggle("collapsed");
})

let div = document.getElementById('contain');
let button = document.getElementById('sidebar-button');
let open = false;
  div.addEventListener('click', function(){
    if(open){
      button.className = 'facing-right';  
    } else{
      button.className = 'facing-left open';
    }

    open = !open;
  });

let nothing = null;

let vinyl1 = document.getElementById('circle-one');
let firstAudio = document.getElementById("first-audio");

let songOne = document.getElementById("first-song-name").innerText;
let nowPlayingSong = document.getElementById("now-playing-song-blank");

hasBeenPaused = false;

vinyl1.addEventListener("click", function(){
  if(hasBeenPaused == false){
    vinyl1.classList.add("animate-running");
    vinyl1.classList.remove("animate-paused");
    firstAudio.play();
    hasBeenPaused = true;
    nowPlayingSong.innerText = songOne;
  }
  else{
    vinyl1.classList.add("animate-paused");
    vinyl1.classList.remove("animate-running")
    firstAudio.pause();
    hasBeenPaused = false;
    nowPlayingSong.innerText = nothing;
  }
});

/*
function turn() {
    document.getElementById("sidebar-button").style.transform = "rotate(180deg)";
}
*/











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