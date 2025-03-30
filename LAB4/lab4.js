//https://jetset.fandom.com/wiki/Gallery/Jet_Set_Radio this is wHERE I GET MY PNGS
let gumimg, mewimg, garamimg, yoyoimg, cubeimg, beatimg, slateimg, comboimg, tabimg, piranhaimg;
//IT WASNT WORKING FOR THE LONGEST TIME BECAUSE IT WAS ALL UNDER ONE IMG THING SO IT WAS OVERRIDING.
//I ADDED THE NAMES AND NOW IT WORKS YAY
let gumaudio, mewaudio, garamaudio, yoyoaudio, cubeaudio, beataudio, slateaudio, comboaudio, tabaudio, piranhaaudio;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
  noCanvasMargin();

  introAudio = createAudio('Jet Set Groove #1.mp3');
    introAudio.play();

  //GUM
  gumimg = createImg('gumjsr.webp');
  gumimg.position(400, 50);
  gumimg.size(150, 200);

    gumaudio = createAudio('graffitismall.mp3');

  gumimg.mousePressed(() => {
    gumimg.attribute('src', 'gumlarge.webp'); 
    gumimg.position (370, 100);
    gumimg.size(200, 100);

    gumaudio.play();

    setTimeout(() => {
        gumimg.attribute('src', 'gumjsr.webp');
        gumimg.position(400, 50); 
        gumimg.size(150, 200); 
      }, 5000); 
  });

  //MEW,, LOL MEWING
  mewimg = createImg('mewjsr.webp');
  mewimg.position(600, 50);
  mewimg.size(150, 200);

    mewaudio = createAudio('graffitibig.mp3');

  mewimg.mousePressed(() => {
    mewimg.attribute('src', 'mewlarge.webp'); 
    mewimg.position (570, 100);
    mewimg.size(200, 100);

    mewaudio.play();

    setTimeout(() => {
        mewimg.attribute('src', 'mewjsr.webp');
        mewimg.position(600, 50); 
        mewimg.size(150, 200); 
      }, 5000); 
  });

  //GARAM
  garamimg = createImg('garamjsr.webp');
  garamimg.position(800, 50);
  garamimg.size(150, 200);

    garamaudio = createAudio('graffitismall.mp3');

  garamimg.mousePressed(() => {
    garamimg.attribute('src', 'garamlarge.webp'); 
    garamimg.position (770, 100);
    garamimg.size(200, 100);

    garamaudio.play();

    setTimeout(() => {
        garamimg.attribute('src', 'garamjsr.webp');
        garamimg.position(800, 50); 
        garamimg.size(150, 200); 
      }, 5000); 
  });

  //YOYO
  yoyoimg = createImg('yoyojsr.webp');
  yoyoimg.position(200, 50);
  yoyoimg.size(130, 200);

    yoyoaudio = createAudio('graffitibig.mp3');

  yoyoimg.mousePressed(() => {
    yoyoimg.attribute('src', 'yoyolarge.webp'); 
    yoyoimg.position (170, 100);
    yoyoimg.size(200, 100);

    yoyoaudio.play();

    setTimeout(() => {
        yoyoimg.attribute('src', 'yoyojsr.webp');
        yoyoimg.position(200, 50); 
        yoyoimg.size(130, 200); 
      }, 5000); 
  });

  //CUBE
  cubeimg = createImg('cubejsr.webp');
  cubeimg.position(1000, 50);
  cubeimg.size(100, 200);

    cubeaudio = createAudio('graffitibig.mp3');

  cubeimg.mousePressed(() => {
    cubeimg.attribute('src', 'cubelarge.webp'); 
    cubeimg.position (970, 100);
    cubeimg.size(200, 100);

    cubeaudio.play();

    setTimeout(() => {
        cubeimg.attribute('src', 'cubejsr.webp');
        cubeimg.position(1000, 50); 
        cubeimg.size(100, 200); 
      }, 5000); 
  });

  //TAB
  tabimg = createImg('tabjsr.webp');
  tabimg.position(420, 300);
  tabimg.size(150, 200);

    tabaudio = createAudio('graffitibig.mp3');

  tabimg.mousePressed(() => {
    tabimg.attribute('src', 'tablarge.webp'); 
    tabimg.position (370, 350);
    tabimg.size(200, 100);

    tabaudio.play();

    setTimeout(() => {
        tabimg.attribute('src', 'tabjsr.webp');
        tabimg.position(420, 300); 
        tabimg.size(150, 200); 
      }, 5000); 
    });

//BEAT
  beatimg = createImg('beatjsr.webp');
  beatimg.position(600, 300);
  beatimg.size(150, 200);

    beataudio = createAudio('graffitismall.mp3');

  beatimg.mousePressed(() => {
    beatimg.attribute('src', 'beatlarge.webp'); 
    beatimg.position (570, 350);
    beatimg.size(200, 100);

    beataudio.play();

    setTimeout(() => {
        beatimg.attribute('src', 'beatjsr.webp');
        beatimg.position(600, 300); 
        beatimg.size(150, 200); 
      }, 5000); 
  });

  //SLATE
  slateimg = createImg('slatejsr.webp');
  slateimg.position(800, 300);
  slateimg.size(150, 200);

    slateaudio = createAudio('graffitibig.mp3');

  slateimg.mousePressed(() => {
    slateimg.attribute('src', 'slatelarge.webp'); 
    slateimg.position (770, 350);
    slateimg.size(200, 100);

    slateaudio.play();

    setTimeout(() => {
        slateimg.attribute('src', 'slatejsr.webp');
        slateimg.position(800, 300); 
        slateimg.size(150, 200); 
      }, 5000); 
  });

  //COMBO
  comboimg = createImg('combojsr.webp');
  comboimg.position(200, 300);
  comboimg.size(130, 200);

    comboaudio = createAudio('graffitismall.mp3');

  comboimg.mousePressed(() => {
    comboimg.attribute('src', 'combolarge.webp'); 
    comboimg.position (170, 350);
    comboimg.size(200, 100);

    comboaudio.play();

    setTimeout(() => {
        comboimg.attribute('src', 'combojsr.webp');
        comboimg.position(200, 300); 
        comboimg.size(130, 200); 
      }, 5000); 
  });

  //PIRANHA
  piranhaimg = createImg('piranhajsr.webp');
  piranhaimg.position(1000, 300);
  piranhaimg.size(100, 200);

    piranhaaudio = createAudio('graffitismall.mp3');

  piranhaimg.mousePressed(() => {
    piranhaimg.attribute('src', 'piranhalarge.webp'); 
    piranhaimg.position (970, 350);
    piranhaimg.size(200, 100);

    piranhaaudio.play();

    setTimeout(() => {
        piranhaimg.attribute('src', 'piranhajsr.webp');
        piranhaimg.position(1000, 300); 
        piranhaimg.size(100, 200); 
      }, 5000); 
  });

//FOR INTRO POPUP IMG
    showPopup();
}

function showPopup() {
    
    popupImg = createImg('lab4intro2.png');
    popupImg.position(600, 100); 
    popupImg.size(800, 800);
  
    
    setTimeout(() => {
      popupImg.remove(); 
    }, 3000); 
  }


function noCanvasMargin() {
    let body = document.body;
    body.style.margin = "0";
    body.style.padding = "0";
    body.style.overflow = "hidden";
 }

