class Rubber{
    constructor(x, y, radius){
        var options ={
            'restitution':0.8,
            'friction':0.8,
            'density':1.0
        };

        this. body=Bodies.circle(x,y,10,options);
        this.radius=10;
        World.add(world, this.body);

    };

    display(){
        var pos= this.body.position;

        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        strokeWeight(3);
        stroke("black");
        fill("darkBlue");
        circle();
        pop();
    }
    };
