class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    // step 2. making the title property
      }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    //step 3. make the title hide
  }

  display(){
    this.title.html("Car Racing Game");
//step 4. give the positions for title, input, button
    this.title.position();
    this.input.position();
    this.button.position();

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      //step 5. position to greeting
      this.greeting.position();
    });

  }
}
