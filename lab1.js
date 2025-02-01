//

function setup(){
    createCanvas (windowWidth,windowHeight)
}

function draw (){
    background (150,150,150,10);

    fill('white');
    stroke ('grey');
    for(var i = 50; i < windowHeight; i++){
        rect((i*8000)%width,(i*5)%height,30,0,60);
    }

    fill('yellow')
    stroke('black')
    if(mouseX < 550) {
        rect(mouseX,mouseY,50,70,5);
    }else{
        fill('cyan')
        rect(mouseX,mouseY,50,50,25);
    }
    
}