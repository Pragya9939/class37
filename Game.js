class Game{

     constructor(){}

     getState(){
var gameStateref = database.ref('gameState');
gameStateref.on("value",function(data)
{
gameState = data.val();
});
     }
update(state)
{
 database.ref("/").update({})

}

async start()
{
 if(gameState === 0 )
 {
  player = new Player();
  var playerCountref = await database.ref('playerCount').once("value");
  if(playerCountref.exists())
  {
    playerCount = playerCountref.val();
    player.getCount();
  }

  

  form = new Form()
  form.display()

 }
}  

play()
{
 form.hide();
 textSize(30);
 text("Game Started" , 120,100);
 
 Player.getAllPlayers();
 
if(allPlayers !== undefined)
{
  var display_position=130;
for(var plr in allPlayers)
{
 if (plr === "player" + player.index)
  fill ("red");
  else
  fill ("black");
display_position=display_position+20;
textSize(15);
text(allPlayers[plr].name+" : "+ allPlayers[plr].distance+120,display_position);
}
}

if(keyIsDown(UP_ARROW) && player.index !== null)
{
     player.distance=player.distance+50;
     player.update();
}


}


}