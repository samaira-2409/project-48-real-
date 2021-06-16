class Pacman{
    constructor(x,y){
        var options={
            'restitution': 0.5
    }
  this.pacdown = loadImage("images/pacmanimages/pacdown.gif");
  this.pacleft = loadImage("images/pacmanimages/pacleft.gif");
  this.pacright = loadImage("images/pacmanimages/pacright.gif");
  this.pacup = loadImage("images/pacmanimages/pacup.gif");
  this.r = 20;
  this.pacman = Bodies.circle(x,y,this.r,options);
  World.add(world,this.pacman);
}
display(){

    var pos = this.pacman.position;
    fill("yellow");
    imageMode(CENTER);
    image(this.pacleft,pos.x,pos.y,20,20);


    
}}
