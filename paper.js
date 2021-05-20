class paper
{
	constructor(x,y)
	{
        var options = {
			'isStatic': false,
			'restitution' : 0.10,
			'density' : 0.1,
			'friction' : 0
        }
		this.body = Bodies.rectangle(x, y,options);
	
		this.image=loadImage("paper.png")
		World.add(world, this.body)
		 
	}
	display()
	{
		      var pos =this.body.position;
			var angle = this.body.angle;
			push()
			translate(pos.x, pos.y);
			imageMode(CENTER)
			

			fill("red")
			rotate(angle)
			image(this.image,100,643,50,50)
		
			pop();

    }
}