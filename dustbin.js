class dustbin{
    constructor(x, y, width, height){
        var options = {
            isStatic : true
        }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);    
    }
    display(){
        fill(rgb(0,255,255));
        stroke(rgb(0,255,255));
        var pos = this.body.position;
        var angle = this.body.angle;
        rect( pos.x, pos.y, this.width, this.height);
    }
}