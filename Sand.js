class Sand{
    constructor(x,y){
        var options={
            'restitution':0.8,
            'friction':0.8,
            'density':1.0
        }
        this.body = Bodies.circle(x,y)
        World.add(world, this.body);
    }

    display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("black");
        fill("red");
        circle(0, 0, this.width, this.height);
        pop();
    }
};