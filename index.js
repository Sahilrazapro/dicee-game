//create random no from 1 to 6
var randomNumber1 = Math.floor(Math.random()*6+1);
//create random dice number
var randomDice = "dice" + randomNumber1 +".png";
//create random image 
var randomImage = "images/" + randomDice;
//set the random image
document.querySelectorAll("img")[0].setAttribute("src" , randomImage);
  



//create random no from 1 to 6
var randomNumber2 = Math.floor(Math.random()*6+1);
//create random dice number
var randomDice = "dice" + randomNumber2 +".png";
//create random image 
var randomImage = "images/" + randomDice;
//set the random image
document.querySelectorAll("img")[1].setAttribute("src" , randomImage);


//if palyer 1 wins
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 wins";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 2 wins";
}
else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw";
}













