class ball{
    constructor(x,y,radius){
        var option = {
            'isStatic': false,
            'restitution' :0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x,y,radius);
        
        this.radius =radius;

        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(255);
        circle(0,0,radius);
        Pop()
    }
}