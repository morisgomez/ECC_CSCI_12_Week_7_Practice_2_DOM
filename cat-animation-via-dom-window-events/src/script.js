//step 1. set up event listener for when HTML,CSS and JS load on window:
let windowLoaded = window.addEventListener("DOMContentLoaded", clickInWindow);
//window is used bc we want x,y coordinates from entire window not just a html element.
//window is the view in codePen below code (i believe so).

//step 2. set up function to handle the click anywhere on the window:
function clickInWindow()
{
  //function in charge of setting up eventListener for click after contents load.
  let clickHandle = document.addEventListener("click", startAnimation);
} //end clickInWindow() function.

//step 3. create setUpAnimation function to get coordinates of user click;
function startAnimation(e) //e is the 
{
 let clickX = e.clientX; //e.g 50.
 let clickY = e.clientY; //e.g 70.
 let cat = document.querySelector("img"); //gets cat image.
 cat.style.left = clickX + "px"; //adds px to numbers.
 cat.style.top = clickY + "px"; //adds px to numbers.
 //new x, y assigned to top-left of img, not center of cat image.
} //end setUpAnimation() function.






















/*
let timerId = null;

window.addEventListener("DOMContentLoaded", function() {
   document.addEventListener("click", startAnimation);
});

function startAnimation(e) {

   // Get mouse coordinates
   let clickX = e.clientX;
   let clickY = e.clientY;  
   
   // TODO: Modify the code below
   if(timerId !== null)
   {
      //stop timer:
      clearInterval(timerId);
   }
   //start a timer that calls moveImage(clickX, clickY) every 10 milliseconds.
   //Save the timer ID in the timerId variable.
   intervalId = setInterval(moveImage(clickX, clickY), 10);
   timerId = intervalId;
}

function moveImage(x, y) {
   const img = document.querySelector("img");
            
   // Determine location of image
   let imgX = parseInt(img.style.left);
   let imgY = parseInt(img.style.top);

   // Determine (x,y) coordinates that center the image 
   // around the clicked (x, y) coords
   const centerX = Math.round(x - (img.width / 2));
   const centerY = Math.round(y - (img.height / 2));

   // TODO: Add code here
   //Add an if statement in moveImage() that stops the timer with the 
   //ID timerId if (imgX, imgY) is equal to (centerX, centerY). 
   //Also set timerId to null.

   if(imgX === centerX && imgY === centerY)
   {
      clearInterval(timerId);
      timerId = null;
   }
   // Move 1 pixel in both directions toward the click
   else if (imgX < centerX) {
      imgX = imgX + 100;
   }
   else if (imgX > centerX) {
      imgX = imgX-100;
   }
   
   if (imgY < centerY) {
      imgY=imgY+100;
   }
   else if (imgY > centerY) {
      imgY=imgY-100;
   }
   
   img.style.left = imgX + "px";
   img.style.top = imgY + "px";
}
*/