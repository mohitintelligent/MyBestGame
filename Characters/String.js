class SlingShot{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }

        this.bodyB = bodyB;
        this.bodyA=bodyA;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){

        this.sling.bodyA = body;

    }
    
    fly(){

        this.sling.bodyA = null;

    }

    display(){

        if(this.sling.bodyA){

            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.bodyB.position;

            push();
            
            stroke(48,22,8);

            if(pointA.x < 220) {
                strokeWeight(7);

                line(pointA.x - 20, pointA.y, pointB.x - 60, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 90, pointB.y - 3);

            }
            else{

                strokeWeight(3);

                line(pointA.x + 25, pointA.y, pointB.x - 60, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 80, pointB.y - 3);

            }
           
            
            pop();
  }
 }
}