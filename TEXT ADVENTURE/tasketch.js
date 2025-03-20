var input;
var button;
var positions = [];
var name = "";
var bgColor = 100; // Default background color
var radio;

//THIS SI FOR THE TEXT INPUT STUFF
function setup() {
  createCanvas(400, 400);

  // Input and button setup
  input = createInput();
  input.position((width - input.width) / 2, height / 2 - 40);
  button = createButton("submit");
  button.position((width - button.width) / 2, height / 2);
  button.mousePressed(startAnimation);

  // RDIOBUTTON SETUP
  radio = createRadio();
  radio.option("Gray", 100);
  radio.option("TOMATO", color(216, 75, 43));
  radio.option("CREAM", color(255, 253, 208));
  radio.option("BEEF", color(109, 68, 59));
  radio.position((width - radio.width) / 2, height / 2 + 40);
  radio.selected(100); // Default selection

  background(100);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(20);
  text("Enter your soup letters.", width / 2, height / 2 - 80);
}

//THIS IS FOR THE ANIMATION OF THE MOVING SOUP WORDS
function startAnimation() {
  name = input.value();
  positions = []; // Clear previous positions
  for (let i = 0; i < 30; i++) {
    positions.push({
      x: random(width),
      y: random(height),
      xSpeed: random(-2, 1),
      ySpeed: random(-1, 1),
    });
  }
}

function draw() {
  background(100);
  textSize(30);
  fill(255);

  // ANIMATE TEXT
  for (let i = 0; i < positions.length; i++) {
    let pos = positions[i];
    text(name, pos.x, pos.y);

    // Update position
    pos.x += pos.xSpeed;
    pos.y += pos.ySpeed;

    // FOR BOUNCING OFF THE WALLS
    if (pos.x < 0 || pos.x > width) pos.xSpeed *= -1;
    if (pos.y < 0 || pos.y > height) pos.ySpeed *= -1;
  }
}