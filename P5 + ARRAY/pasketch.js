
//ARRAYS
var shapes = []; 
var positions = [];
var speed = []; 
var colours = []; 
var rotations = []; 

var numberOfShapes = 300;

var btn; 
var thursday = false;
var mysound;
var bgImage;

// SOURCE FOR IMG https://www.foodmanufacturing.com/supply-chain/news/22918947/from-farm-to-fork-the-seasonal-produce-dilemma
function preload(){
   bgImage = loadImage("grocerystore.jpeg");
}

function setup(){
   createCanvas(windowWidth, windowHeight);
   noCanvasMargin();

   mysound = createAudio("waterspray.mov"); //CHANGE TO mist sound 

   //FRO WHAT WE LEARNED IN CLASS, I CHANGED IT TO A GROCEY STORE LOL
   btn = createButton("water the veggies");
   btn.position((windowWidth - btn.width) / 2, 10);
   btn.mousePressed(function(){
       thursday = !thursday;
       if(thursday){
           btn.html("press to stop");
           mysound.play();
       }else{
           btn.html("water the veggies");
           mysound.stop();
       }
   });

   //the COLOURS KINDA STOPPED WORKING IDK WHY SO I FOUND THIS AND CHANGED IT
   var predefinedColors = [
    color(255), 
    color(135, 206, 235), 
    color(176, 224, 230), 
    color(240, 248, 255), 
    color(150, 150, 255)  
   ]

   for(var i = 0; i < numberOfShapes; i++){
       colours[i] = predefinedColors[i % predefinedColors.length]; //CHANGED THIS

       rotations[i] = random(PI/2);
       positions[i] = random(windowHeight);
       speed[i] = random(1, 7);

       if( random() > 0.4 ){
           shapes[i] = "rect";
       }else{
           if( random() > 0.5){
               shapes[i] = "circle";
           }else{
               shapes[i] = "emoji";
           }
       }
   }

   var shapesString = shapes.join(", ");
   console.log("shapes: " + shapesString);
   //UHH I HOPE THIS IS CORRECT,, I TRIED TO DO A JOIN ARRAY

   noStroke();
   rectMode(CENTER);
   textSize(20);
}

function draw(){
   image(bgImage, 0, 0, windowWidth, windowHeight);
   if(thursday === true){
       confetti();
   }

}

//ADDED THIS CAUSE I DIDNT WANT THE WHITE BORDER
function noCanvasMargin() {
    let body = document.body;
    body.style.margin = "0";
    body.style.padding = "0";
    body.style.overflow = "hidden";
 }

function confetti(){

   var interval = windowWidth / numberOfShapes;

   for(var i = 0; i < numberOfShapes; i++){
       fill( colours[i] );
       push();
       translate(i*interval, positions[i]);
       rotate( rotations[i] );
     
       if( shapes[i] === "rect" ){
           rect(0, 0, 5, 10);
       }
       if( shapes[i] === "circle"){
           circle(0,0,8);
       }
       if( shapes[i] === "emoji"){
           text("💧", 0, 0);
       }
       pop();
   }

   for(var i = 0; i < numberOfShapes; i++){
       positions[i] += speed[i];
       if(positions[i] > height){
           positions[i] = -50;
       }
   }

}

function windowResized(){
   resizeCanvas(windowWidth, windowHeight);
}


//SORUCES
//https://www.w3schools.com/jsref/jsref_join.asp
// https://canvascloud.ocadu.ca/courses/10767/modules WEEK 7
// https://www.youtube.com/watch?v=nshPAKuRuj0 WATER SOUND EFFECT
// https://www.w3schools.com/js/js_htmldom_html.asp#gsc.tab=0 THISI DIDNT REALLY USE CAUSE IM STILL TYRING TO UNDERSTAND IT STILL