   
      class Plinko {
        constructor(x, y) {
          var options = {
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.8
          }
         
          
          this.body=Matter.Bodies.circle(x, y, 10, options)
          this.r=10
          World.add(world, this.body);
        }
        display(){
          var pos=this.body.position;	
          fill("white");
          ellipseMode(CENTER);
          ellipse(pos.x,pos.y,this.r, this.r);
        
        }
       
        };
      
       