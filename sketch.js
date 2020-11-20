var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies;
 
var particles;
var plinkos = [];
var divisions = [];
var score = 0;
var divisionHeight=300;
var turn = 0;
var particle;
var  gameState = "play";


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


    for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
    }

    for (var j = 75; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");

  push ();
  strokeWeight(3);
  stroke("white");
  fill (color(random(0, 215), random(0, 85), random(0, 155)))
  textSize(27);
  text("Score:"+score,20,30);
  pop ();


  push ();
  strokeWeight(3);
  stroke("green");
  fill (color(random(0, 250), random(0, 175), random(0, 205)));
  textSize(25);
  text("500", 25,550);
  text("500", 100,550);
  text("500", 175,550);
  text("500", 255,550);
  text("200", 335,550);
  text("200", 420,550);
  text("200", 500,550);
  text("100", 575,550);
  text("100", 650,550);
  text("100", 740,550);
 
  pop();
  Engine.update(engine);
 

  if(gameState === "end"){
    particle = null;
    push ();
    strokeWeight(3);
    stroke("green");
    fill (color(random(0, 170), random(0, 55), random(0, 135)));
    textSize(25);
    textSize(90);
    text("GAME OVER",122,468);
    pop();

  }
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  //  if(frameCount%60===0){
  //   particles.push(new Particle(random(100,700), 10,10));
  //   turn++;
  // }
 
  // for (var j = 0; j < particles.length; j++) {
  //    particles[j].display();
  //  }


      if(particle!=null){
        particle.display();
        if(particle.body.position.x>15 && particle.body.position.x<315 && particle.body.position.y>760){
            score = score + 500;
            particle = null;
            console.log(score);
            if(turn>=5){
              gameState = "end"
          }
        }
      }

      if(particle!=null){
        particle.display();
        if(particle.body.position.x>337 && particle.body.position.x<555 && particle.body.position.y>760){
            score = score + 200;
            particle = null;
            if(turn>=5) gameState = "end"
        }
      }

      if(particle!=null){
        particle.display();
        if(particle.body.position.x>580 && particle.body.position.x<796 && particle.body.position.y>760){
            score = score + 100;
            particle = null;
            if(turn>=5) gameState = "end";
          }
      }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

function mousePressed()
{
  if(gameState!="end"){
    turn++;
    particle = new Particle(mouseX,26,10);
  }

} 