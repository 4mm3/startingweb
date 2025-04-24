let images = [];//MY ARRY 
let currentImageIndex = 0;
let slideshowInterval;

let text1, text2, text3;
let textStartTime = 0; 
let currentTextIndex = 0; //SEENOW THIS STUFF HAS TO BE DIFFERENT FROM ROOM CAUSE IM USING ARRAY I THINK
let texts = [];

//https://www.w3schools.com/js/js_timing.asp

function preload() {

    //CAR
    images.push(loadImage("car/videoframe_0.png"));
    images.push(loadImage("car/videoframe_1.png"));
    images.push(loadImage("car/videoframe_2.png"));
    images.push(loadImage("car/videoframe_3.png"));
    images.push(loadImage("car/videoframe_4.png"));
    images.push(loadImage("car/videoframe_5.png"));
    images.push(loadImage("car/videoframe_6.png"));
    images.push(loadImage("car/videoframe_7.png"));
    images.push(loadImage("car/videoframe_8.png"));
    images.push(loadImage("car/videoframe_9.png"));
    images.push(loadImage("car/videoframe_10.png"));
    images.push(loadImage("car/videoframe_11.png"));
    images.push(loadImage("car/videoframe_12.png"));
    images.push(loadImage("car/videoframe_13.png"));
    images.push(loadImage("car/videoframe_14.png"));
    images.push(loadImage("car/videoframe_15.png"));
    images.push(loadImage("car/videoframe_16.png"));
    images.push(loadImage("car/videoframe_17.png"));
    images.push(loadImage("car/videoframe_18.png"));
    images.push(loadImage("car/videoframe_19.png"));
    images.push(loadImage("car/videoframe_20.png"));
    images.push(loadImage("car/videoframe_21.png"));
    images.push(loadImage("car/videoframe_22.png"));

    //TEXT

    text1 = loadImage("car/02_drivetext1.png");
    text2 = loadImage("car/01_drivetext2.png");
    text3 = loadImage("car/00_drivetext3.png");

    texts.push(text1, text2, text3); //ARRAY


}

function setup (){
    let canvas = createCanvas(1024, 768);
    centerCanvas(canvas);
    noCanvasMargin();

    background(images[currentImageIndex]);
    noLoop(); // DONT WANT NO LOOP

    slideshowInterval = setInterval(nextImage, 800);
}

function centerCanvas(canvas) {
    let x = (windowWidth - width) / 2; 
    let y = (windowHeight - height) / 2; 
    canvas.position(x, y);
}

function noCanvasMargin() { //DONT WANT NO MARGIN, GOT THIS FROM MY P5+ARRAY
    let body = document.body;
    body.style.margin = "0";
    body.style.padding = "0";
    body.style.overflow = "hidden";
 }

 function nextImage() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        clearInterval(slideshowInterval); //STOPPING THE SLIDE SHOW
        window.location.href = "room.html"; //GOING TO ROOM
        return; 
    }
//function draw() {
    redraw();
}

function draw(){
// IM TRYING TO HAVE THE IMAGES POPUP LIKE HOW I HAVE IT FOR THE OTHER ONE IN ROOM BUT ITS NOT WORKING
//IM THINKING ITS BECAUSE I HAVE THE SLIDESHOW AND IM USUING ARRAYS BUT IDK
if (currentImageIndex < images.length) {
    background(images[currentImageIndex]); 
}


if (currentTextIndex < texts.length) {
    if (millis() - textStartTime <= 3000) {
        
        image(texts[currentTextIndex], 80, 600, 900, 100);
    } else if (millis() - textStartTime > 3000 && millis() - textStartTime <= 5000) {
        //PAUSE
    } else {
        currentTextIndex++;
        textStartTime = millis(); 
    }
  }
}

//https://p5js.org/reference/p5/millis/ I DONT THINK I LIKE MILLIS

   