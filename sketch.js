
// all the stuff that happens in the curly { } works for funtions and objects
function setup() {
    createCanvas(windowWidth, windowHeight);
    xCenter=150;
    yCenter=150;
  }

function draw() {
    background(0,128,0);
  
  //colours green:0,128,0 white:255 purp:128,0,128 teal:0,128,128, navy:0,0,128, black:0
    translate(xCenter, yCenter); //moves the orgin point so the star can rotate here
    rotate(frameCount / -100.0); //divide100 makes it slow and the - makes it spin countclockwise
    fill(0);
    star(0, 0, 30, 70, 5);
  }
  
  //honestly i learned this fron the p5js website but i feel like i dont full understand it 100%
  function star(x, y, radius1, radius2, npoints) { //this puts the star in the middle (my x and y point)
    let angle = TWO_PI / npoints; //angles between each star point
    let halfAngle = angle / 2.0; //half angle between outer and inner points
   
    beginShape(); 

    //for this, it was so confusing and i don't fully understand how this makes a star but it works
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius2;
      let sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * radius1;
      sy = y + sin(a + halfAngle) * radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }

  //creds to p5js!


  let number = 80;
  console.log(number); 