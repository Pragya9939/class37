class Form{

    constructor()
    {
        this.input = createInput("Name");
        
        this.button = createButton("Play");
        
        this.greeting = createElement('h3');
    }

    hide()
    {
      this.input.hide();
      this.button.hide();
      this.greeting.hide();
    }

  display()
  {
   var title = createElement('h2');
   title.html("CarRacingGame");
title.position(400,100);

this.input.position(550,350);
this.button.position(550,550);

this.button.mousePressed(()=>{
   this.input.hide();
   this.button.hide();   
player.name = this.input.value();
 playerCount = playerCount+1;
 player.index = playerCount;

 player.update();
player.updateCount(playerCount);

this.greeting.html(" Hello ! Welcome to CarRacingGame "+ player.name)
this.greeting.position(400,200);








});
}  
}