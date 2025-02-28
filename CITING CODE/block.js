class Block {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.angle = 0;
        this.c = 70;
    }

    display(){ //to rotate the shape
        noFill();
        stroke(this.c);
        push(); //pushes the code below
        translate(this.x, this.y);
        rotate(this.angle);
        // rect(0, 0, size - offset, size - offset);
        if (this.angle > 0 && this.angle < 45){
            this.drawRect();
        }else{
            this.drawX();
        }
        pop(); //returns it
    }


    //where we check the distance to rotate the shape
    move (){ 
        //if the house is moving, check distance between mouse, location and center of sqaure.
        //this code is like when the mouse gets close to the certain area of the shape, it will angle/rotate
        let distance;

        if (pmouseX - mouseX != 0 || pmouseY - mouseY != 0) {
            distance = dist(mouseX, mouseY, this.x, this.y);
        if (distance < distMouse) {
            this.angle += 1; 
            this.c = 150;
        }
        } //BE SURE TO MAKE SURE THE IF STATEMENTS ARE CLOSED CORRECTLY

        // if squares are already rotating, keep rotating until angle is 90deg
            if(this.angle > 0 && this.angle < 90) {                   
            this.angle += 1;
            if (this.c > 70){
                this.c -= 3;
            }

        } else {
            this.angle = 0;
            this.c = 70;
        }
    } //ending for move()
        
        drawRect(){
            rect(0, 0, size - offset, size - offset);
        }
        
        drawX() {
            let margin = - size/2;
        line(margin + offset/2, margin + offset/2, margin + size - offset/2, margin + size - offset/2);
        line(margin + size - offset/2, margin + offset/2, margin + offset/2, margin + size - offset/2);
        }
}
    




