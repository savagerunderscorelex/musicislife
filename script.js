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


// Code for storing the Vinyls within a variable
let vinylOne = document.getElementById('circle-one');
let vinylTwo = document.getElementById("circle-two");

// Code for assigning the songs within variables
let firstAudio = document.getElementById("first-audio");
let secondAudio = document.getElementById("second-audio");
// Code for assigning Song Headers
let songOne = document.getElementById("first-song-name").innerText;
let songTwo = document.getElementById("second-song-name").innerText;
// Now Playing Blank (changes when a song is selected)
let nowPlayingSong = document.getElementById("now-playing-song-blank");

let hasBeenPausedVinylOne = false;
let hasBeenPausedVinylTwo = false;

vinylOne.addEventListener("click", function(){
  if(hasBeenPausedVinylOne == false){
    vinylOne.classList.add("animate-running");
    vinylOne.classList.remove("animate-paused");
    firstAudio.play();
    hasBeenPausedVinylOne = true;
    nowPlayingSong.innerText = songOne;
  }
  else{
    vinylOne.classList.add("animate-paused");
    vinylOne.classList.remove("animate-running")
    firstAudio.pause();
    hasBeenPausedVinylOne = false;
    nowPlayingSong.innerText = null;
  }
});

vinylTwo.addEventListener("click", function(){
  if(hasBeenPausedVinylTwo == false){
    vinylTwo.classList.add("animate-running");
    vinylTwo.classList.remove("animate-paused");
    secondAudio.play();
    hasBeenPausedVinylTwo = true;
    nowPlayingSong.innerHTML = songTwo;
  }
  else{
    vinylTwo.classList.add("animate-paused");
    vinylTwo.classList.remove("animate-running");
    secondAudio.pause();
    hasBeenPausedVinylTwo = false;
    nowPlayingSong.innerText = null;
  }
});













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