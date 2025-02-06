// since im still following my jet set radio theme, 
// im gonna make the shapes bounce and run around and have one of the characters named gum be running from the police!

let bg;
let y = 0;


var policebrick = { 
    x: 40,
    y: 50,
    w: 30, 
    h: 30, 
    xspeed: 2,
    yspeed: 1,
    colour: 'grey',
    draw: function(){
        fill(this.colour);
        rect(this.x, this.y, this.w, this.h);

    },
    move: function(){ 
        this.x += this.xspeed;
        this.y += this.yspeed;

        if(this.x < 0 || this.x > width - this.w){
            this.xspeed *= - 1;
        }

      if(this.y > height - this.h || this.y < 0){
           this.yspeed *= -1;
       }
      
    }
};

var police2brick = { 
    x: 40,
    y: 50,
    w: 30, 
    h: 30, 
    xspeed: 1,
    yspeed: 2,
    colour: 'grey',
    draw: function(){
        fill(this.colour);
        rect(this.x, this.y, this.w, this.h);

    },
    move: function(){ 
        this.x += this.xspeed;
        this.y += this.yspeed;

        if(this.x < 0 || this.x > width - this.w){
            this.xspeed *= - 1;
        }

      if(this.y > height - this.h || this.y < 0){
           this.yspeed *= -1;
       }
      
    }
};

var police3brick = { 
    x: 0,
    y: 0,
    w: 50, 
    h: 50, 
    xspeed: 2,
    yspeed: 2,
    colour: 'black',
    draw: function(){
        fill(this.colour);
        rect(this.x, this.y, this.w, this.h);

    },
    move: function(){ 
        this.x += this.xspeed;
        this.y += this.yspeed;

        if(this.x < 0 || this.x > width - this.w){
            this.xspeed *= - 1;
        }

      if(this.y > height - this.h || this.y < 0){
           this.yspeed *= -1;
       }
      
    }
};

var police4brick = { 
    x: 0,
    y: 0,
    w: 50, 
    h: 50, 
    xspeed: 1,
    yspeed: 1,
    colour: 'black',
    draw: function(){
        fill(this.colour);
        rect(this.x, this.y, this.w, this.h);

    },
    move: function(){ 
        this.x += this.xspeed;
        this.y += this.yspeed;

        if(this.x < 0 || this.x > width - this.w){
            this.xspeed *= - 1;
        }

      if(this.y > height - this.h || this.y < 0){
           this.yspeed *= -1;
       }
      
    }
};

var gumbrick = { 
    x: 0,
    y: 0,
    w: 20, 
    h: 40, 
    xspeed: 2,
    yspeed: 3,
    colour: 'limegreen',
    draw: function(){
        fill(this.colour);
        rect(this.x, this.y, this.w, this.h);
 
    },
    move: function(){ 
        this.x += this.xspeed;
        this.y += this.yspeed;

        if(this.x < 0 || this.x > width - this.w){
            this.xspeed *= - 1;
        }

      if(this.y > height - this.h || this.y < 0){
           this.yspeed *= -1;
       }
       
    }
};

function setup(){
    bg = loadImage('jsrsetting.jpeg'); //SHOUTOUT P5.JS FOR HELPING ME WITH THE BACKGOUND IMAGE
    createCanvas(637,358);
}

function draw(){ 
    background(bg);

    stroke(0);
    line(0, y, width, y);

    //SWAT TEAM (black)
    police3brick.draw();
    police3brick.move();
    police4brick.draw();
    police4brick.move();
    //POLICE (grey)
    policebrick.draw();
    policebrick.move();
    police2brick.draw();
    police2brick.move();
    //gum (green)
    gumbrick.draw();
    gumbrick.move();
   
}
