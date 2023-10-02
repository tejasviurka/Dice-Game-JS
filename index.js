// generate random no , math.random generate random
// no betn 1 to 9999 but we need betn 1 to 6 so * by 6
// we want that no to be int not dec so use math.floor
var randomNumber1 = Math.floor(Math.random()*6) +1;
// math.random = 0 to 9.9999
// math.random*6 = 0 to 5.999
// math.floor ...round up = 0 to 5..so add 1
var randomDiceImage = "dice" +randomNumber1 + ".png";

// changing attribute img
var randomImageSource = "images/" + randomDiceImage;

// select the img
var image1= document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2=Math.floor(Math.random()*6)+1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Play 1 Wins!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Play 2 Wins!";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}