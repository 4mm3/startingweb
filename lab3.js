var colourPicker; // function scope
let strokeWeightSlider;
var bgColourPicker;
var drawRadio;

function setup(){
    createCanvas(720,300);
    colourPicker = createColorPicker('green');
    
    strokeWeightSlider = createSlider(1,50,10,1);
    
    bgColourPicker = createColorPicker('white'); 

    drawRadio = createRadio(); 
    drawRadio.option('line'); 
    drawRadio.option('circle'); 
    drawRadio.option('square'); 
    drawRadio.option('triangle'); 
    //default
    drawRadio.selected('Line');

//for the refresh button
    var bgColorButton = createButton('Refresh Canvas');
    bgColorButton.mousePressed(repaint);
    bgColourPicker.changed( repaint ); 
    background( bgColourPicker.value() );
}

function draw(){
    strokeWeight( strokeWeightSlider.value() );
    stroke( colourPicker.value() );   

    // remixed from p5js.org/reference/mouseispressed/
    // https://p5js.org/reference/
    if(mouseIsPressed){
        let mode = drawRadio.value();
        if (mode === 'line'){
            line(mouseX, mouseY, pmouseX, pmouseY);
        }  else if (mode === 'circle') { 
            circle(mouseX, mouseY, 20, 50); 
        } else if (mode === 'square') { 
            square(mouseX, mouseY, 20,); 
        } else if (mode === 'triangle') { 
            triangle(mouseX, mouseY, mouseX - 10, mouseY + 20, mouseX + 10, mouseY + 20)
        }
        
    }
}
    /// end remix



function repaint(){
    background( bgColourPicker.value() );
    console.log( bgColourPicker.value().setGreen(255) );
}