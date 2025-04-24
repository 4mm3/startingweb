let room, bedsheet;
//mom everything
let mom1, mom2, mom3, momtext, notmom, notmomtext;
//me stuff
let cantsleep, sleep, mombutton, momshout, sleeping, dead;
//roomstuff
let door, doorclick, closet, closetclick, guitar, guitarclick, wwindow, windowclick; 
//scarythings execpt not mom
let tallman, closetman, deathman;
//part 1
let part = 1;
let delayStartTime = 0;

//part 2 click 
//image timer is so THAT THE THE TEXT BUBBLE DONT STAY FOR LONG
let doorClicked = false; 
let doorImageTimer = 0;

let closetClicked = false;
let closetImageTimer = 0;
let closetmanAppearCount = 0; 
let closetmanTimer = 0;
let guitarClicked = false;
let guitarImageTimer = 0;

//et guitarSound;

//I WANTED A DELAY BETWEEN PART 2 AND 3
let transitionTime = 0;
let transitionPart = false;

//part3 
let tallmanTimer = 0;
let tallmanVisible = true; 
let tallmanDisappearTimer = 0; //I HAVE 2 CAUSE IT WAS GETTING CONFUSED WITH THE ENTER TIME IDK HELP IDK IF I NEED THIS OR THE OTHER ONE
let mombuttonClicked = false; //MOM BUTTON
let mombuttonTimer = 0; 
//let momshoutVisible = false; //MOM SHOUT
//let momshoutTimer = 0;
let notmomVisible = false;
let notmomTimer = 0; 







//ALL MY IMAGES I MADE/EDITED ON PHOTOSHOP
function preload() {
room = loadImage("room/room.png");
bedsheet = loadImage("room/bedsheet.png");

    mom1 = loadImage("room/mom1.png");
    mom2 = loadImage("room/mom2.png");
    mom3 = loadImage("room/mom3.png");
    momtext = loadImage("room/momtext1.png");

    notmom = loadImage("room/notmom.png");
    notmomtext = loadImage("room/momshoutaction.png");

    //me stuff
    cantsleep = loadImage("room/cantsleeptext.png");
    sleep = loadImage("room/sleeptext.png");
    mombutton = loadImage("room/callmombutton.png");
    momshout = loadImage("room/momshouttext.png");
    sleeping = loadImage("room/sleeping.png"); //black screen
    dead = loadImage("room/bloodpov.png"); //red overlay thing

    //roomstuff
    door = loadImage("room/door.png");
    doorclick = loadImage("room/doorclickaction.png");
    closet = loadImage("room/closet.png");
    closetclick = loadImage("room/closetclickaction.png");
    guitar = loadImage("room/guitar.png");
    guitarclick = loadImage("room/guitarclickaction.png");
    wwindow = loadImage("room/window.png"); //wwindow GOTTA BE WW CAUSE IT WAS NOT WORKING,ITS ALREADY AN OBJECT IN JS OR SOMETHING
    windowclick = loadImage("room/windowclickaction.png");

  //  guitarSound = loadSound("detunedguitar.mp3");

    //scary things
    tallman = loadImage("room/tallman.png");
    closetman = loadImage("room/closetman.png");
    deathman = loadImage("room/deathman.png");

    console.log("room loaded:", room);
    console.log("bedsheet loaded:", bedsheet);
    console.log("mom images loaded:", mom1, mom2, mom3, momtext);
    console.log("notmom images loaded:", notmom, notmomtext);
    console.log("me stuff loaded:", cantsleep, sleep, momshout, sleeping, dead);
    console.log("room stuff loaded:", door, doorclick, closet, closetclick, guitar, guitarclick, wwindow, windowclick);
    console.log("scary things loaded:", tallman, closetman, deathman);

}

function noCanvasMargin() { //DONT WANT NO MARGIN, GOT THIS FROM MY P5+ARRAY
    let body = document.body;
    body.style.margin = "0";
    body.style.padding = "0";
    body.style.overflow = "hidden";
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








function draw() {
    background(room);
    image(bedsheet, 0, height - 150, windowWidth, 150); //BED SHEET

    //PART 1 WITH MOM IN ROOM 
    // IDK IF I LIKE FRAME COUNT OR MILLIS BETTER BOTH WERE COMPLICATED BUT FOR PART 2 AND 3 I CONTINUED WITH MILLIES AND NOT THE FRAME COUNT STUFF
    if (part === 1) {
    if (frameCount <= 300) { 
        document.body.style.cursor = "none";
        image(mom1, 400, 200, 250, 500); //HOR POS, VER POS, WIDTH, HEIGHT
        image(bedsheet, 0, height - 160, windowWidth, 150);
        image(momtext, 80, 600, 900, 100);
    } else if (frameCount > 300 && frameCount <= 360) { 
        image(mom2, 350, 200, 200, 500);
        image(bedsheet, 0, height - 160, windowWidth, 150);
    } else if (frameCount > 360 && frameCount <= 420) { 
        image(mom3, 290, 200, 200, 500);
        image(bedsheet, 0, height - 160, windowWidth, 150);
        delayStartTime = millis(); 
    } else if (millis() - delayStartTime <= 2000) {
        //DELAY AFTER THE MOM LEAVES B4 THE CANT SLEEP TEXT
    } else if (millis() - delayStartTime > 2000 && millis() - delayStartTime <= 5000) {
        image(cantsleep, 80, 600, 900, 100);
    } else {
        //noLoop();
        part = 2; 
        frameCount = 0; 
    }
}

    //PART 2 WITH INTERACTIVE
   // if (frameCount > 420) {

        if (part === 2) {
        document.body.style.cursor = "default";
        
        // INCREASE X TO MOVE TO THE RIGHT // INCREASE Y TO MOVE HIGHER CAUSE ITS -
        //DONT LOOSE THESE NUMBERS THIS TOOK FOREVER TO FIND THE RIGHT SPOT
    //image(door, 80, height - 650); 
    //image(closet, 1000, height - 650); 
    //image(guitar, 1170, height - 320);

        //DOOR
        if (!doorClicked && mouseX > 5 && mouseX < 5 + door.width && mouseY > height - 700 && mouseY < height - 700 + door.height) {
            console.log("door hover");
            image(door, 5, height - 700); 
        }
        if (doorClicked && millis() - doorImageTimer <= 5000) {
            image(doorclick, 80, 600, 900, 100); 
        }
       //CLOSET
        if (!closetClicked && mouseX > 670 && mouseX < 670 + closet.width && mouseY > height - 670 && mouseY < height - 670 + closet.height) {
            console.log("closet hover");
            image(closet, 670, height - 670); 
        }
            if (closetClicked && millis() - closetImageTimer <= 3000) {
                image(closetclick, 80, 600, 900, 100); 

                if (closetmanAppearCount < 2) { 
                    if (millis() - closetmanTimer > 1000) { 
                        image(closetman, 700, 250, 50, 90); 
                        closetmanTimer = millis(); 
                        closetmanAppearCount++; 
                    }
                }
        }
        //GUITAR // !guitarClicked HAS TO BE THERE TO MAKE SURE GUITAR CAN'T BE CLICKED AGAIN
        if (!guitarClicked && mouseX > 790 && mouseX < 790 + guitar.width && mouseY > height - 320 && mouseY < height - 320 + guitar.height) {
            console.log("guitar hover");
            image(guitar, 790, height - 320); 
        }
            if (guitarClicked && millis() - guitarImageTimer <= 3000) {
                image(guitarclick, 80, 600, 900, 100); 
            }

            if (doorClicked && closetClicked && guitarClicked) {
                if (!transitionPart) {
                    transitionPart = true; 
                    transitionTime = millis(); 
                }
    
                
                if (millis() - transitionTime >= 3000) {
                    part = 3; 
                    transitionPart = false; //TURN OF THE TRANSITION PART
                    tallmanTimer = millis();
                }
            }

        }

        //PART 3 SCARY STUFF
        // (LEFTRIGHT, UPDOWN)
        if (part === 3) {
            if (tallmanVisible) {
                image(tallman, 400, 100); 
        }
        if (!mombuttonClicked && mouseX > 10 && mouseX < 10 + mombutton.width && mouseY > 600 && mouseY < 600 + mombutton.height) {
            console.log("button hover");
            image(mombutton, 10, 600); 
        }
        if (mombuttonClicked && millis() - mombuttonTimer <= 3000) {
            image(momshout, 80, 600, 900, 100); 
        }
        //if (millis() - tallmanDisappearTimer > 1000 && tallmanDisappearTimer > 0) {
        if (tallmanVisible && tallmanDisappearTimer > 0 && millis() - tallmanDisappearTimer > 1000) {
            tallmanVisible = false; //BYE TALL MAN
            console.log("tallman disappeared");
            notmomTimer = millis();
            //console.log("notmomTimer set to:", notmomTimer);
                }

        if (notmomTimer > 0 && millis() - notmomTimer >= 3000 && !tallmanVisible) {
            notmomVisible = true; 
            console.log("show not mom");

     }       
        if (notmomVisible) {
            image(notmom, 400, 200); 
            image(bedsheet, 0, height - 160, windowWidth, 150);
            image(notmomtext, 80, 600, 900, 100);
        } 

        if (notmomVisible && millis() - notmomTimer >= 6000) { 
            console.log("part 4");
            part = 4;
        }   

       // if (notmomVisible && sleepTimer > 0 && millis() - sleepTimer >= 3000) {
       //     image(sleeping, 0, 0, windowWidth, windowHeight); //BLACK SCREEN
     //   }
        
      //  if (sleepTimer > 0 && millis() - sleepTimer >= 4000) {
       

    }//PART3 END

    if (part === 4) { //I WAS TRYING SO HARD TO GET THIS TO HAPPEN 3 SECOND AFTER NOT MOM AND IT WASNT WORKING SO I GAVE UP AND MAKE A PART 4 LOL
        window.location.href = "faindex.html"; 
    }

}//DRAWEND

//PLEASE DONT CLICK ALL AT THE SAME TIME
function mousePressed() {
    if (!doorClicked && mouseX > 5 && mouseX < 5 + door.width && mouseY > height - 700 && mouseY < height - 700 + door.height) {
        doorClicked = true; 
        doorImageTimer = millis(); 
        console.log("door clicked");
    }

    if (!closetClicked && mouseX > 670 && mouseX < 670 + closet.width && mouseY > height - 670 && mouseY < height - 670 + closet.height) {
        closetClicked = true; 
        closetImageTimer = millis(); 
        console.log("closet clicked");
    }

    if (!guitarClicked && mouseX > 790 && mouseX < 790 + guitar.width && mouseY > height - 320 && mouseY < height - 320 + guitar.height) {
        guitarClicked = true; 
        guitarImageTimer = millis(); 
        console.log("guitar clicked"); 

       // if (guitarSound && !guitarSound.isPlaying()) {
           // guitarSound.play();
       // } I HAVE NO IDEA HOW TO FIX THIS 
    }

    if (!mombuttonClicked && mouseX > 10 && mouseX < 10 + mombutton.width && mouseY > 600 && mouseY < 600 + mombutton.height) {
        mombuttonClicked = true; 
        mombuttonTimer = millis(); 
        tallmanDisappearTimer = millis();
        console.log("mombutton clicked"); 
    }

   // if (mombuttonVisible && mouseX > 10 && mouseX < 10 + 200 && mouseY > 600 && mouseY < 600 + 100) {
     //   mombuttonVisible = false;
       // mombuttonTimer = millis();
        //m/omshoutVisible = true; 
        //momshoutTimer = millis();
        //tallmanDisappearTimer = millis();
    //}

  }

//PROCESS

//APRIL 18, STARTED ON PHOTOSHOP
//APRIL 21, STARTED WORKING AGAIN AND FINISHED ALL THE PHOTOSHOP STUFF AND DID BASE CODING.

//APRIL 22, ITS 10:58pm AND I FINISHED PART 1 AND PART 2. 
// I HAVENT DONE ANY OF THE SCARY STUFF YET BECAUSE IM WORKING WITH WINDOWS OPEN AND IM NOT TRYING TO SCARE MYSELF AT NIGHT
// PART 2 ISN'T FULLY DONE YET, I NEED TO ADD THE CLOSET MAN
// PART 3 IS THE SCARY STUFF WITH THE TALL MAN, DEATH MAN AND NOT MOM THEN THATS GONNA BE THE END OF "CHAPTER 1"

//APRIL 23, IM RESIZING THE CANVAS SO NOW I NEED TO EDIT ALL THE POSITIONS, DOING WINDOW WIDTH RUINED THE SCALE SO I HAVE TO CHANGE IT
//I WANTED THE GAME TO BE A BIT LONGER BUT HONESTLY JUST DOING ALL THIS WAS TOOK ALOT LONGER THAN I ACTUALLY THOUGHT
// I USED COPILOT TO HELP ME TROUBLESHOOT CAUSE I WAS CONFUSED ABOUT THE TIMERS AND I THINK I GOT IT NOW

//ARPRIL 24 1:03AM OMGMGMGM FINALLY IT ALL WORKED OMG I HATE MILLIS THAT THING WAS NOT WORKING FOR ME
// MY FAV LINE OF CODE WAS ANY CLOSETMAN CODE. I REALLY LIKED THAT GLITCH EFFECT CAUSE THATS THE VIBE OF THE GAME I WANTED TO MAKE
//HAVING THE CLOSET CLICKED THEN CLOSETMAN IS THERE I THINK IS A GOOD STUBLE INTRO OF THE OTHER SPOOKY GUYS TALLMAN AND NOT MOM SO YEAH






//CITATION
//https://www.w3schools.com/js/js_timing.asp
//https://p5js.org/reference/p5/millis/
//https://p5js.org/reference/p5/frameCount/
//https://p5js.org/reference/p5/image/
//https://p5js.org/reference/p5/mouseClicked/
//https://p5js.org/reference/p5/mousePressed/
//https://www.w3schools.com/htmL/html_images_imagemap.asp THIS WAS MORE INSPO
//Mandela catalogue inspo
//https://www.youtube.com/watch?v=5h7rSSzH2g8 
//https://codepen.io/citizenwoodward/pen/RNRQKx
//https://www.w3schools.com/js/js_debugging.asp
//https://www.w3schools.com/js/js_arrays.asp
//https://www.w3schools.com/js/js_if_else.asp

