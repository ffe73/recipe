$(document).ready(function () {
  // Activate WOW.js
  new WOW().init();
});

$(window).ready(function() {
  // Splash Screen
  $("#splash").fadeOut();
});

var audio = new Audio('mp3/yes.mp3');
document.getElementById(".img1").addEventListener("mouseOver", function() {
  audio.play();
});
