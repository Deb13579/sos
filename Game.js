class Game {
  constructor(){

    this.drivequestion = createElement('h1');
    this.button1 = createButton('turn right');
    this.button2 = createButton('turn left');
    this.button3 = createButton('take u turn');
    this.button4 = createButton('no u turn');
    this.button5 = createButton('one way');
    this.button6 = createButton('no one way');
    this.button7 = createButton('no going back');
    this.button8 = createButton('do whitehatjr');
    this.button9 = createButton('60 limit')
    this.button10 = createButton('Faster than 50')
    this.button11 = createButton('50 limit')
    this.button12 = createButton('This is confusing')
  }
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",(data)=>{
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  show(){

    this.drivequestion.style('font-weight', '10px');
          this.drivequestion.html("See the Image carefully,<br>choose the correct option below,<br>Click to select answer");
          this.drivequestion.position(650,80)

          
          this.button1.style('font-weight', '40px');
          this.button1.style('border-radius', '10px');
          this.button1.style('background', 'skyblue');
          this.button1.position(650,300);

         
          this.button2.style('font-weight', '20px');
          this.button2.style('border-radius', '10px');
          this.button2.style('background', 'skyblue');
          this.button2.position(850,300);

         
          this.button3.style('font-weight', '20px');
          this.button3.style('border-radius', '10px');
          this.button3.style('background', 'skyblue');
          this.button3.position(650,350);

         
          this.button4.style('font-weight', '20px');
          this.button4.style('border-radius', '10px');
          this.button4.style('background', 'skyblue');
          this.button4.position(850,350);


  }

  dontshow(){
    this.button1.hide();
    this.button2.hide();
    this.button3.hide();
    this.button4.hide();
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerageRef = await database.ref('playerage').once("value");
      if(playerageRef.exists()){
        playerage = playerageRef.val();
        player.getage();

      }
      this.button1.hide();
      this.button2.hide();
      this.button3.hide();
      this.button4.hide();
      this.button5.hide();
      this.button6.hide();
      this.button7.hide();
      this.button8.hide();
      form = new Form()
      form.display();
    }

    traffic = createSprite(350,280,50,50);
    traffic.addImage("traffic",trafficimg);
    traffic.scale = 1.5;
   
  }

  


  play(){
      form.hide();
      Player.getPlayerInfo();
      //question = new Question();
          

      background(173,133,133);      

      if(allPlayers !== undefined){
        for(var plr in allPlayers){
          fill(77,105,157);
          textSize(30);
          text("Welcome "+ allPlayers[plr].name,20,35);
          fill("black");
          textSize(20);
          this.button1.show();
          this.button2.show();
          this.button3.show();
          this.button4.show();
          

          
          this.button4.mousePressed(()=>{
            //button1.html('No way ahead');
            // button2.html('Two way');
             //button3.html('One way');
             //button4.html('Go straight');
 
            this.button1.hide();
            this.button2.hide();
            this.button3.hide();
            this.button4.hide();
            this.button5.show();
            this.button6.show();
            this.button7.show();
            this.button8.show();
            this.button5.style('font-weight', '40px');
            this.button5.style('border-radius', '10px');
            this.button5.style('background', 'skyblue');
            this.button5.position(650,300);
  
           
            this.button6.style('font-weight', '20px');
            this.button6.style('border-radius', '10px');
            this.button6.style('background', 'skyblue');
            this.button6.position(850,300);
  
           
            this.button7.style('font-weight', '20px');
            this.button7.style('border-radius', '10px');
            this.button7.style('background', 'skyblue');
            this.button7.position(650,350);
  
           
            this.button8.style('font-weight', '20px');
            this.button8.style('border-radius', '10px');
            this.button8.style('background', 'skyblue');
            this.button8.position(850,350);
  
             traffic.visible = false;
             traffic2 = createSprite(350,280,50,50);
             traffic2.addImage("traffic",traffic2img);
             traffic2.scale = 0.5;
             
           })
           this.button5.mousePressed(()=>{
            //button1.html('No way ahead');
            // button2.html('Two way');
             //button3.html('One way');
             //button4.html('Go straight');
 
            this.button5.hide();
            this.button6.hide();
            this.button7.hide();
            this.button8.hide();
            this.button9.show();
            this.button10.show();
            this.button11.show();
            this.button12.show();
            this.button9.style('font-weight', '40px');
            this.button9.style('border-radius', '10px');
            this.button9.style('background', 'skyblue');
            this.button9.position(650,300);
  
           
            this.button10.style('font-weight', '20px');
            this.button10.style('border-radius', '10px');
            this.button10.style('background', 'skyblue');
            this.button10.position(850,300);
  
           
            this.button11.style('font-weight', '20px');
            this.button11.style('border-radius', '10px');
            this.button11.style('background', 'skyblue');
            this.button11.position(650,350);
  
           
            this.button12.style('font-weight', '20px');
            this.button12.style('border-radius', '10px');
            this.button12.style('background', 'skyblue');
            this.button12.position(850,350);
  
             traffic2.visible = false;
             limit50 = createSprite(350,280,50,50);
             limit50.addImage("traffic",i1_img);
             limit50.scale = 0.5;
             
           })
           

      
         
        
      }
      drawSprites();
    }

  } 

}