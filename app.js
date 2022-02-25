// query selecting the element that a user will press in the directional pad on pokeDex.
const leftPress = document.querySelector(".direct-pad__cube.left");
console.log(leftPress)
const rightPress = document.querySelector(".direct-pad__cube.right");
console.log(rightPress)
const upPress = document.querySelector(".direct-pad__cube.top");
console.log(upPress)
const bottomPress = document.querySelector(".direct-pad__cube.bottom");
console.log(bottomPress)

// directions starting at null

let left = null;
console.log(left)
let right = null;
console.log(right)
let up = null;
console.log(up)
let bottom = null;
console.log(bottom)



// left direction click
const handleLeftButtonClick = () => {
    //if (left) {
        //console testing functions 
      console.log('prize is on the left')
      //return leftPress;
    //}
  };
  

  // right direction click
  const handleRightButtonClick = () => {
    //if (right) {
        console.log('yo im pointing right')
        //return rightPress;
    //}
  };

  // up direction click
  const handleUpButtonClick = () => {
    //if (up) {
      console.log('cat leaped up the tree')
      //return upPress;
    //}
  };
  
  // bottom direction click
  const handleBottomButtonClick = () => {
    //if (bottom) {
      console.log('pj jumped to the bottom')
      //return bottomPress
    //}
  };

  // adding event listeners
leftPress.addEventListener('click', handleLeftButtonClick);
rightPress.addEventListener('click', handleRightButtonClick);
upPress.addEventListener('click', handleUpButtonClick);
bottomPress.addEventListener('click', handleBottomButtonClick);

//handleLeftButtonClick('yo')

//handleBottomButtonClick('peter')

//handleUpButtonClick('kool')

//handleRightButtonClick('pokemon')

//------------------------ Pikachu Rap Audio Play -----------------------//

// DOM for pikachu Song to play
const pikachuSong = document.getElementById("pikachuRap");
// DOM for picking up the button A
const pressA = document.getElementById("pressPikachuA");

//event listener that handles click on function once press A is commenced.
pressA.addEventListener("click", function () {
   
    if(!pikachuSong.paused) { // statement to check if the song of pikachu is paused. and if it is then make an action.
    pikachuSong.pause();  // so that user can pause whenever they feel like.
    pikachuSong.currentTime = 0;  // to reset the song to the beginning.
    }
    else {
        pikachuSong.play();  // to make the pikachu theme song play
    }

    // Once pikachu song plays there will not be any styling appearing.
    pressA.style.display = none;
})

// ---------------------------- B button audio functioning --------------------- //

// DOM for various pokemon characters to play voices.
//const diglettAudio = document.getElementById("diglett");
//const bulbasaurAudio = document.getElementById("bulbasaur");
//const goldeenAudio = document.getElementById("goldeen");
//const meowthAudio = document.getElementById("meowth");
//const squirtleAudio = document.getElementById("squirtle");
//const psyduckAudio = document.getElementById("psyduck");
//const pidgeyAudio = document.getElementById("pidgey");

// array of sound effects, this has all the id attributes from each pokemon.
const sounds = ['diglett', 'bulbasaur', 'goldeen', 'meowth', 'squirtle', 'psyduck', 'pidgey' ];
console.log(sounds);

// DOM for picking up the button B
const pressB = document.getElementById("pressAudioB");

  // randomising the audio so that they play in randomised order in button B.
  
  const randomSounds = () => {
    let index = Math.floor(Math.random() * 1000) % sounds.length;
    let id = sounds[index];
    let audioElement = document.getElementById(id)
    //console.log(audioElement.play())
    return audioElement.play();
  }

// once user clicks buttom B then the handler will cause the function to play the pokemon voice audio.
pressB.addEventListener('click', randomSounds);
//randomSounds()