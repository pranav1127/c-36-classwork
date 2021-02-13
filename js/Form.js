class Form{
constructor(){

}
display(){
var title=createElement('h1');
title.html("Car Racing");
title.position(250,200);

var input=createInput("name:");
var button=createButton('play');
var greeting=createElement('h3');
input.position(250,250);
button.position(250,300);

button.mousePressed(function(){
input.hide();
button.hide();
var name= input.value();
playerCount=playerCount +1;
player.update(name);
player.updateCount(playerCount);
var greeting=createElement('h3');
greeting.html("hello"+name);
greeting.position(100,100);
})


}}