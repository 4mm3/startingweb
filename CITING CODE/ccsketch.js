//hello this is my citing code assignment yay
// the first tutorial i am following is called "Learn p5.js for Creative Coding - 5 Beginner Projects" on Youtube. https://youtu.be/o5t7PxRJSXk?si=dldIz0JHQVrt5bjY 
// i am following project 1: interactive display with rotating blocks.
// course developed by @pattvira
// she was inspired from anypixel.js - https://googlecreativelab.github.io/anypixel



let distMouse = 15; //distance mouse
let blocks = [] //array
let cols; let rows; let size = 10; let offset = 4;

function setup(){
    createCanvas(windowWidth, 200);
    rectMode (CENTER); //rectangle center point (instead of in the corner)
    angleMode(DEGREES); // we are working with degrees
    cols = width/size;
    rows = height/size;


    for (let i=0; i<cols; i++){ //outer loop
        blocks[i] = [];
    for (let j=0; j<rows; j++){ //inner loop
        blocks[i][j] = new Block (size/2 + i*size, size/2 + j*size); 
        //this allows us to create rows and columns of blocks that are spaced out by the distance size

        }
    }

}

function draw(){
    background (0); //colour
    for (let i=0; i<cols; i++){
    for (let j=0; j<rows; j++){
        blocks[i][j].move();
        blocks[i][j].display();
    }
  }

    //print(pmouseX, mouseX, pmouseY, mouseY);

}
