"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Mitchell Hess
      Date: October 24, 2026

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/
// Constructor function for the timer object
function timer(min, sec) {
  this.minutes = min;
  this.seconds = sec;
  this.timeID = null;
}

  // Method to run or pause the timer
  timer.prototype.runPause = function(timer, minBox, secBox) {
    if (timer.timeID) {
      window.clearInterval(timer.timeID);
      timer.timeID = null;
    } else {
      timer.timeID = window.setInterval(countdown, 1000);
    }

    function countdown() {
      if (timer.seconds > 0) {
        timer.seconds--;
      } else if (timer.minutes > 0) {
        timer.minutes--;
        timer.seconds = 59;
      } else {
        window.clearInterval(timer.timeID);
        timer.timeID = null;
      }

      minBox.value = timer.minutes;
      secBox.value = timer.seconds;
    }
  };







/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

// Create an instance of the timer object
let myTimer = new timer(minBox.value, secBox.value);

// Update the timer minutes when the minutes box changes
minBox.onchange = function() {
  myTimer.minutes = minBox.value;
}

// Update the timer seconds when the seconds box changes
secBox.onchange = function() {
  myTimer.seconds = secBox.value;
}

// Run or pause the timer when the button is clicked
runPauseTimer.onclick = function() {
  myTimer.runPause(myTimer, minBox, secBox);
}

