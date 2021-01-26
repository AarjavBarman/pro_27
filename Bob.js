class bob {
    constructor(x,y,radius){
        var bob_options = {
        isStatic: true
        } 
    this.radius = radius;
    this.body = Bodies.circle(x,y,this.radius/2,bob_options);
    World.add(world,this.body);
    }
            display(){
            push ();
            translate(this.body.position.x,this.body.position.y)    
            fill("red");
            circle (0,0,this.radius)
            pop ();    
            }    
}