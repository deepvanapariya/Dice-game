
var randomNumber1=Math.floor(Math.random()*6 )+1;
var randomNumber2=Math.floor(Math.random()*6 )+ 1;


var randomDiceImg='images/'+'dice'+randomNumber1+'.png';
var img1=document.querySelectorAll('img')[0];
img1.setAttribute('src',randomDiceImg);

var randomDiceImg2='images/'+'dice'+randomNumber2+'.png';
var img2=document.querySelectorAll('img')[1];
img2.setAttribute('src',randomDiceImg2);

 if(randomNumber1>randomNumber2){
    document.querySelector('h1').innerHTML='🚩player1 wins';
}
else if(randomNumber1<randomNumber2){
    document.querySelector('h1').innerHTML='player2 wins🚩';
}

else{
    document.querySelector('h1').innerHTML="🚩it's draw🚩";
 
}




