let state = "homepage"; //STATRING IMAGE
let stateStartTime = 0;

function preload() {
    homepage = loadImage("homepage.png");
    homepageclicked = loadImage("homepageclicked.png");
    loading = loadImage("loading.png");
}

function setup (){
    let canvas = createCanvas(1024, 768);
    centerCanvas(canvas);
    noCanvasMargin();
}

function centerCanvas(canvas) {
    let x = (windowWidth - width) / 2; 
    let y = (windowHeight - height) / 2; 
    canvas.position(x, y);
}

function windowResized() {
    let canvas = createCanvas(1024, 768); 
    centerCanvas(canvas); 
}

function noCanvasMargin() { //DONT WANT NO MARGIN
    let body = document.body;
    body.style.margin = "0";
    body.style.padding = "0";
    body.style.overflow = "hidden";
 }

 function draw() {
    if (state === "homepage") {
        background(homepage);
    } else if (state === "homepageclicked") {
        background(homepageclicked);
        if (millis() - stateStartTime > 1000) { 
            state = "loading";
            stateStartTime = millis(); 
        }
    } else if (state === "loading") {
        background(loading);
        if (millis() - stateStartTime > 2000) { 
            // OPENING CAR SCENE
            window.location.href = "car.html"; 
        }
    }
}

function mousePressed() {
    // AERA FOR THE BTTON IDK ITS NOT ACCURATE LIKE IF I CLICKED UNER THE BUTTON IT WILL STILL WORK 
    // BUT I HAVE NO IDEA HOW I CAN TELL THE EXACT COORDS SO IM GONNA LEAVE IT
    let x = 300; 
    let y = 200; 
    let w = 400;
    let h = 300; 

    if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
        state = "homepageclicked";
        stateStartTime = millis(); 
        console.log("switching to homepageclicked");
    }
}

