class Box {
  constructor(x,y,w,h){
    var options ={
      isStatic : false
    }
    this.body = Bodies.rectangle(x,y,w,h,options);
    this.width = w
    this.height = h
    World.add(world,this.body)
         }

         display (){
          console.log(this.body.speed);
          if (this.body.speed<5){
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            rectMode(CENTER);
            rect(0, 0, this.width, this.height);
            pop();
             
          }
        else{
      
          World.remove(world,this.body);
        push();
          this.visibility=this.visibility-5;
        tint(255,this.visibility);
             
       pop();
      }
         }
        
        score(){
          if(this.visibility<0 && this.visibility>-105){
            score++;
          }
        }
      
      
      }