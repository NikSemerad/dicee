

function randomNumber() {
  var randomNumber = Math.random();
  randomNumber = (randomNumber * 6) + 1;
  randomNumber = Math.floor(randomNumber);
  return randomNumber;
}
var randomNumber1 = randomNumber();
var randomNumber2 = randomNumber();
var diceName1 = "images/dice" + randomNumber1 + ".png";
var diceName2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img1").setAttribute("src", diceName1);
document.querySelector(".img2").setAttribute("src", diceName2);

if (randomNumber1 < randomNumber2) {
  var message = "Player 2 Wins!🚩";
} else if (randomNumber1 > randomNumber2) {
  var message = "🚩Player 1 Wins!";
} else {
  var message = "Draw!";
}

document.querySelector("h1").innerHTML = message;
