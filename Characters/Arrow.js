class Arrow{
    constructor(x,y,width,height){
        var options = {
            'restitution':0,
            'friction':1.0,
            'density':1.0
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.angle=20

        this.image = loadImage("images/Arrow.jpg");

        World.add(world, this.body);
    }
    display(){

        push();

        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);

        pop();

    }

    changeAngle(angle){

        this.angle=angle;
        rotate(this.angle);

    }


}