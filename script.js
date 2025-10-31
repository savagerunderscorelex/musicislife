const toggler = document.querySelector("#sidebar-button");
let main = document.querySelector(".main");
toggler.addEventListener("click",function() {
    document.querySelector(".sidebars").classList.toggle("collapsed");
})

let div = document.getElementById('contain');
let button = document.getElementById('sidebar-button');
let open = false;
  div.addEventListener('click', function(){
    if(open){
      button.className = 'facing-right';
      main.classList.remove("blurred");
    } else{
      button.className = 'facing-left open';
      main.classList.add("blurred");
    }

    open = !open;
  });


// Code for storing the Vinyls within a variable
let vinylOne = document.getElementById('circle-one');
let vinylTwo = document.getElementById("circle-two");
let vinylThree = document.getElementById("circle-three");
let vinylFour = document.getElementById("circle-four");

// Code for assigning the songs within variables
let firstAudio = document.getElementById("first-audio");
let secondAudio = document.getElementById("second-audio");
let thirdAudio = document.getElementById("third-audio");
let fourthAudio = document.getElementById("fourth-audio");

// Code for assigning Song Headers
let songOne = document.getElementById("first-song-name").innerText;
let songTwo = document.getElementById("second-song-name").innerText;
let songThree = document.getElementById("third-song-name").innerText;
let songFour = document.getElementById("fourth-song-name").innerText;

// Now Playing Blank (changes when a song is selected)
let nowPlayingSong = document.getElementById("now-playing-song-blank");

// HasBeenPause Variables
let hasBeenPausedVinylOne = false;
let hasBeenPausedVinylTwo = false;
let hasBeenPausedVinylThree = false;
let hasBeenPausedVinylFour = false;
// Event Listeners for Vinyl Clicks

// vinyl one
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

// vinyl two
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

// vinyl three

vinylThree.addEventListener("click", function(){
  if(hasBeenPausedVinylThree == false){
    vinylThree.classList.add("animate-running");
    vinylThree.classList.remove("animate-paused");
    thirdAudio.play();
    hasBeenPausedVinylThree = true;
    nowPlayingSong.innerHTML = songThree;
  }
  else{
    vinylThree.classList.add("animate-paused");
    vinylThree.classList.remove("animate-running");
    thirdAudio.pause();
    hasBeenPausedVinylThree = false;
    nowPlayingSong.innerText = null;
  }
});

// vinyl four

vinylFour.addEventListener("click", function(){
  if(hasBeenPausedVinylFour == false){
    vinylFour.classList.add("animate-running");
    vinylFour.classList.remove("animate-paused");
    fourthAudio.play();
    hasBeenPausedVinylFour = true;
    nowPlayingSong.innerHTML = songFour;
  }
  else{
    vinylFour.classList.add("animate-paused");
    vinylFour.classList.remove("animate-running");
    fourthAudio.pause();
    hasBeenPausedVinylFour = false;
    nowPlayingSong.innerText = null;
  }
});
