class line{
    constructor(x,y,width,height){
        var option = {
        'restitution' :0.8,
        'friction' :1.0,
        'density' :1.0
        }
        this.body = Bodies.rectangle(x,y,width,height);

        this.width=width;
        this.height=height
        
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(0,100,0);
        circle(0,0,radius);
        Pop()
    }
}