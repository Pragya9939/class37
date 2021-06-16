var database;
var playerCount=0;
var gameState=0;
var playerName;
var player,game,form;
var allPlayers;

function setup(){
  database = firebase.database();
  createCanvas(600,600);
  game = new Game();
  game.getState();
  game.start();

}

function draw(){
  background("blue");
    
    if(playerCount === 4)
    {
     game.update(1);
    }
    if(gameState === 1)
    {
      clear();
      game.play();
    }

    drawSprites();
  
}
