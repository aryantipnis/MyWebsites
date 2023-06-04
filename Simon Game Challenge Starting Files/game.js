
var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];

function nextSequence(){
  var randomNumber = Math.floor(Math.random() * 4);
}

var randomChosenColor = buttonColors[randomNumber];

gamePattern.push(randomChosenColor);

$("#randomChosenColour").fadeOut().fadeIn();

var audio = new Audio();
$("#green").
