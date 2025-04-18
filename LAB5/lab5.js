//var data;
//var index = 0;

let jsrData;
let bg;


function preload(){

    bg = loadImage('jsrbkgpurple.jpg'),
  

    fetch('data.json') //I PRE SURE FETCH IS LIKE THE loadJSON FUNCTION CAUSE loadJSON WASNT WORKING FOR BUT THIS DID
        .then(response => response.json())
        .then(json => {
            jsrData = json; 
            console.log('loaded json:', jsrData);
 
        })
        .catch(err => console.error('Error fetching data:', err));
}



function setup(){
    createCanvas(1000, 350);

}

function draw(){
    background(bg);

    if (jsrData) {

        textAlign(CENTER);
        fill(255);

        // TITLE
        textSize(24);
        text(`GAME: ${jsrData.gameInfo.title}`, width / 2, 40);

        // CHARACTER AND GANGS
        textSize(16);
        let y = 80;
        jsrData.jetsetradio.forEach(character => {
            text(`${character.name} - ${character.role}`, width / 2, y);
            y += 20;
        });

        //THIS STUFF I STARTED TO GET ON MY OWN
        textSize(11);
        y += 20;
        text(`RELEASE YEAR: ${jsrData.gameInfo.releaseYear}`, width / 2, y);

        y += 20;
        text(`DEVELOPER: ${jsrData.gameInfo.developer}`, width / 2, y);

        y += 20;
        text(`PLATFORMS: ${jsrData.gameInfo.platforms}`, width / 2, y);

//https://jetsetradio-api.onrender.com/
//https://gamesystemrequirements.com/game/jet-set-radio
//https://www.w3schools.com/JS/js_json.asp
//https://p5js.org/reference/p5/loadJSON/
//https://www.w3schools.com/jsref/api_fetch.asp


    }
}

   // textSize(16);
   // fill(0);
   // for (let i = 0; i < data.jetsetradio.length; i++) {
      //  text(data.jetsetradio[i], 20, 30 + i * 20);
   // }
    
   // if (frameCount % 60 === 0) {
  //  index++;
  //  index = index % data.jetsetradio.length;
  //  }
  //  text(data.jetsetradio[index],20,20);


