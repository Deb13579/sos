var canvas, backgroundImage;

var gameState = 0;
var distance = 0
var playerage = 0;
var allPlayers;
var mybutton;
var signs;
var button1, button2, button3, button4;
var question;

var traffic, trafficimg, stopimg, stop;
var traffic2, traffic2img;
var timeset=60;
var database;
var limit50, limit60, limit70, limit80, limit90, limit100, limit110, limit120
var i1, i2, i3, i4, i5, i6 ,i7, i8, i9, i10, i11, i12, i13;
var i14, i15, i16, i17, i8, i19, i20, i21, i22, i23, i24, i25, i26, i27, i28, i29, i30;
var i31, i32, i33, i34, i35, i36, i37, i38;
var i1_img, i2_img, i3_img, i4_img, i5_img, i6_img, i7_img;
var i8_img, i9_img, i10_img, i11_img, i12_img, i13_img;
var i14_img, i15_img, i16_img, i17_img, i18_img, i19_img;
var i20_img, i21_img, i22_img, i23_img, i24_img, i25_img;
var i26_img, i27_img, i28_img, i29_img, i30_img, i31_img;
var i32_img, i33_img, i34_img, i35_img, i36_img, i37_img;
var i38_img;

var form, player, game;

function preload(){
  traffic2img = loadImage('oneway.png');
  trafficimg = loadImage('uturn no.png');
  stopimg = loadImage('stop.png')
  i1_img = loadImage("50 limit.png")
  i2_img = loadImage("60 limit.png") 
  i3_img = loadImage("70 limit.png")
  i4_img = loadImage("80 limit.png")
  i5_img = loadImage("90 limit.png")
  i6_img = loadImage("100 limit.png")
  i7_img = loadImage("110 limit.png")
  i8_img = loadImage("120 limit.png")
  i9_img = loadImage("cycles.png")
  i10_img = loadImage("giveway.png")
  i11_img = loadImage("go down.jpg")
  i12_img = loadImage("go left.png")
  i13_img = loadImage("go up.jpg")
  i14_img = loadImage("go rigjht.png")
  i15_img = loadImage("go straight.png")
  i16_img = loadImage("keep going left.png")
  i17_img = loadImage("move it.png")
  i18_img = loadImage("NO BEEPS.png")
  i19_img = loadImage("no cheating.jpg")
  i20_img = loadImage("no cow carts.png")
  i21_img = loadImage("no human carts.png")
  i22_img = loadImage("no left.png")
  i23_img = loadImage("no people.png")
  i24_img = loadImage("no right.png")
  i25_img = loadImage("no trucks.png")
  i26_img = loadImage("no vehicles that use a motor.png")
  i27_img = loadImage("stop.png")
  i28_img = loadImage("straight left.png")
  i29_img = loadImage("straight or left.png")
  i30_img = loadImage("ur weight.png")
  i31_img = loadImage("straight or right.png")
  i32_img = loadImage("straight right.png")
  i33_img = loadImage("u cant enter.png")
  i34_img = loadImage("u cant stop.png")
  i35_img = loadImage("ur free.png")
  i36_img = loadImage("ur too heavy.png")
  i37_img = loadImage("ur too tall.png")
  i38_img = loadImage("ur too long.png")
}


function setup(){
  canvas = createCanvas(displayWidth-100, displayHeight-200);
  database = firebase.database();
  

  game = new Game();
  game.getState();
  game.start();
}


function draw(){

  background(124,196,125);


  if(gameState===1){
    clear();
    game.play();
    game.show();
  }

 
  

}
