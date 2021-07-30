class Bow  {
    constructor(x,y,width,height) {

      var options = {
          isStatic: true
      }

      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image=loadImage("images/bow.png");
      World.add(world, this.body);
    }
    
    display(){
      var pos =this.body.position;
      fill("brown");

      imageMode(CENTER)
      image(this.image,100, 200, this.width, this.height);

      rectMode(CENTER);
      rect(pos.x,pos.y,this.width,this.height);

    }
  };
