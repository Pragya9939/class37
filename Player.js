class Player{

      constructor()
      {
        this.name = null;
        this.distance = 0;
        this.index = null;
      }

getCount(){

var playerCountref = database.ref('playerCount');
playerCountref.on("value", function(data)
{
 playerCount = data.val();
 
})
}
updateCount(count)
{
 database.ref('/').update
 ({ 
   playerCount:count
 })
}

update()
{
 var playerIndex = "players/player" + this.index;

database.ref(playerIndex).set
({
name:this.name,distance:this.distance
});
}

static getAllPlayers()
{
var allPlayerRef = database.ref('players');
allPlayerRef.on("value",(data) => {
allPlayers = data.val();

});


}




}






















































