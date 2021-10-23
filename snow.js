class snow{

    constructor(x,y){
        var option={
        isStatic:false,
        'friction':0.01,
        'density':0.001,
        'restitution':0.01
        }
        this.body=Bodies.rectangle(x,y,20,20,option)
        World.add(world,this.body);
        this.img=loadImage("snow4.webp")
    }
    display(){
    stroke("orange")
    imageMode(CENTER)
    image(this.img,this.body.position.x,this.body.position.y,20,20)
    }
}