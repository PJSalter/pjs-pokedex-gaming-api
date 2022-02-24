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

const pikachuSong = document.getElementById("pikachuRap");
const pressA = document.querySelector(".buttons__button");
