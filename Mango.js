class Mango{
    constructor(x,y,radius){
        var options = {
            isStatic:true,
            friction:1,
            restitution:0
        } 
        this.radius=radius;
        this.body = Bodies.circle(x,y,this.radius/2,options);
        this.image= loadImage("Plucking mangoes/mango.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius,this.radius);
    }
}