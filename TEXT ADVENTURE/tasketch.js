var input;
var button;
var positions = [];
var name = "";
var bgColor;
var radio;
var breadImg; 
var showBread = true;
var clickCount = 0; 
var maxClicks = 5;
var breadOpacity = 255;
var message;

function preload() {
  breadImg = loadImage('bread.png'); 
}

function setup() {

  createCanvas(200, 200);
  bgColor = color(255);

  //my SOUP BOWL
  let canvas = createCanvas(200, 200);
  canvas.style('border', '3px solid black');

  // INPUT SETUP STUFF
  input = createInput();
  input.position((windowWidth - input.width) / 2, height + 460);
  button = createButton("submit");
  button.position((windowWidth - button.width) / 2, height + 500);
  button.mousePressed(validateInput);

    // MESSAGE SETUP FOR THE WORD LENGTH THING
    message = createP(""); 
    message.position((windowWidth - input.width) / 2, height + 520);
    message.style("color", "red"); 
    message.style("font-size", "14px");

  // THIS TOOK M E SO LONG TO FIGURE OUT CAUSE THE COLORS WERE NOT WORKING CAUSE I RESERVSD THE ORDER
  radio = createRadio();
  radio.option("rgb(37, 114, 37)", "veggie"); 
  radio.option("rgb(139, 69, 19)", "beef");
  radio.option("rgb(175, 53, 42)", "tomato");
  radio.position((windowWidth - radio.width) / 4, height + 460);
  radio.selected("white");
}

//FOR THE INPUT VALIDATION THING SO IT DOESNT GO OVER 5 LETTERS OR ELSE THE SOUP WILL LOOK LIKE GARBAGE
function validateInput() {
  let inputValue = input.value().trim();

  if (inputValue.length > 5) { //UHHH IDK IF 5 IS TOO LONG BUT ITS OKAY I WANTED VARITY, WHOEVER IS READING THIS HONESTLY DOING ONE LETTER WORKS THE BEST AND I WISH I DID MULTIPLE BUT THATS TOO HARD
    message.html("word too long! only 1-5 letters."); 
  } else {
    message.html(""); // i DONT WANT A GOOD MESSAGE 
    startAnimation(); 
  }
}

//MOUSE PRESSED
//THE BREAD IS BEHIND THE LETTERS AND I DONT KNOW HOW TO FIX
function mousePressed() {
  //TO MAKE SURE IT KNOWS THE AREA WHERE THE BREAD IS TO CLICK
  let breadX = width / 2 - 10;
  let breadY = height / 2 + 10;
  let breadWidth = 100;
  let breadHeight = 100;

  if (
    mouseX > breadX &&
    mouseX < breadX + breadWidth &&
    mouseY > breadY &&
    mouseY < breadY + breadHeight
  ) {
    //FOR THE BREAD OPACITY
    breadOpacity -= 255 / maxClicks; 
    breadOpacity = max(breadOpacity, 0);

    // FOR THE CLICKING BREAD TO EAT THE BREAD
    clickCount++; 
    if (clickCount >= maxClicks) {
      showBread = false; 
    }
  }
}


function draw() {
  background(bgColor);

  //FOR RAIDO
  let selectedColor = radio.value();
  if (selectedColor) {
    bgColor = color(selectedColor);
  }

//FOR THE BREAD OPACITY
if (showBread) {
  tint(255, breadOpacity);
  image(breadImg, width / 2 - 10, height / 2 + 10, 100, 100); 
  noTint(); 
}

//FOR THE TEXT ANIMATION MOVING TEXT
//IDK WHY NAME IS CROSSED OUT
  textSize(30);
  fill(245, 245, 220);
  for (let i = 0; i < positions.length; i++) {
    let pos = positions[i];
    text(name, pos.x, pos.y);

    pos.x += pos.xSpeed;
    pos.y += pos.ySpeed;

    // FOR THE BOUNCE
    if (pos.x < 0 || pos.x > width) pos.xSpeed *= -1;
    if (pos.y < 0 || pos.y > height) pos.ySpeed *= -1;
  }
    
}

function startAnimation() {
  console.log("Animation started with input:", input.value());
  name = input.value();
  positions = []; 

  for (let i = 0; i < 30; i++) {
    positions.push({
      x: random(width), 
      y: random(height), 
      xSpeed: random(-2, 1), // HORIZONTAL
      ySpeed: random(-1, 2), // VERTICAL
    });
  }
}

//CITATIONS,, SOME OF THE CODE WAS FROM THESE AND I CHANGE SOME OF IT UP. BREAD CITATION IS THERE TOO.

//https://editor.p5js.org/tom.smith/sketches/fASj3inoc
//https://p5js.org/reference/p5/mousePressed/
//https://www.loblaws.ca/en/garlic-oval/p/20101020_EA
//https://www.w3schools.com/js/tryit.asp?filename=tryjs_validation_number
          //https://www.w3schools.com/js/js_validation.asp
//https://p5js.org/reference/p5/createRadio/
//https://editor.p5js.org/lberdugo/sketches/ldAjJb4ns