const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var database;
var gameState = 0;
var playerCount = 0;
var score = 0;

var player1,player2;

var allPlayers;

var player, form, game;

var engine, world;

var redloon = [];
var redloonOp = [];
var yellowloon = [];
var yellowloonOp = [];
var turquoiseloon = [];
var turquoiseloonOp = [];
var blueloon = [];
var blueloonOp = [];
var greenloon = [];
var greenloonOp = [];
var purpleloon = [];
var purpleloonOp = [];
var goldenloon = [];
var goldenloonOp = [];
var evilloon = [];
var evilloonOp = [];

var bottomGroung,wall;

var Arrow1,Arrow2,allArrows;
var Bow1=[];
var Bow2=[];
var string1,string2,allStrings;

function preload(){
}
function setup(){
    createCanvas(1200,400);
    database = firebase.database();

    game = new Game();
    game.getState();
    game.start();

    form=new Button();

    engine = Engine.create();
    world = engine.world;

}
function draw(){
    
    background("pink");
    Engine.update(engine);

    if (playerCount === 2&&gameState===0) {
        game.update(1);
      }
      if (gameState === 1) {
        clear(); 
        game.play();
      }
    
}