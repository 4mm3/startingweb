var input;
var button;
var positions = [];
var name = "";
var bgColor;
var radio;

function setup() {

  createCanvas(200, 200);
  bgColor = color(255);

  // INPUT SETUP STUFF
  input = createInput();
  input.position((windowWidth - input.width) / 2, height + 460);
  button = createButton("submit");
  button.position((windowWidth - button.width) / 2, height + 500);
  button.mousePressed(startAnimation);

  // THIS TOOK M E SO LONG TO FIGURE OUT CAUSE THE COLORS WERE NOT WORKING CAUSE I RESERVSD THE ORDER
  radio = createRadio();
  radio.option("rgb(37, 114, 37)", "veggie"); 
  radio.option("rgb(139, 69, 19)", "beef");
  radio.option("rgb(175, 53, 42)", "tomato");
  radio.position((windowWidth - radio.width) / 2, height - 150);
  radio.selected("white");
}

function draw() {
  let selectedColor = radio.value(); 
  if (selectedColor) {
    bgColor = color(selectedColor); 
  }
  background(bgColor);

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
  name = input.value();
  positions = []; 

  for (let i = 0; i < 30; i++) {
    positions.push({
      x: random(width), 
      y: random(height), 
      xSpeed: random(-2, 2), // HORIZONTAL
      ySpeed: random(-2, 2), // VERTICAL
    });
  }
}