var randomNumber1=Math.random();
randomNumber1=Math.round(randomNumber1*6+1);
//var randomDiceImage= "dice"+randomNumber1+".png";//dice1.png to dice6.png
var randomImageSource= "images/dice" + randomNumber1+".png";//images/dice1.png to images/dice6.png 
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);


var randomNumber2=Math.random();
randomNumber2=Math.round(randomNumber2*6+1);
var randomImageSource2= "images/dice"+ randomNumber2+".png";
 document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
else {
    document.querySelector("h1").innerHTML=" Both Player Wins";
}
