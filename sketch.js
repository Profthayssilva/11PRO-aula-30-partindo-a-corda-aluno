const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var rope,fruit,ground;
var fruit_con;

var bg_img;
var food;
var rabbit;

var button;
var bunny;

// Carregue a imagem usando a função loadImage() e
// passe o caminho da imagem como parâmetro dentro da
// função loadImage().
   





function setup() 
{
  createCanvas(500,700);
  frameRate(80);

  engine = Engine.create();
  world = engine.world;

//   crie o botão de imagem usando a função createImg() e passe a imagem que
// queremos mostrar neste botão.

 


  // Na função mouseClicked(), passamos a função que queremos executar ao clicar no botão.


  
  rope = new Rope(8,{x:220,y:30});
  ground = new Ground(200,690,600,20);

  // declare uma variável bunny, coloque as posições x, y, e a largura e altura do sprite,
  // use a função bunny.addImage(), defina  a escala do sprite como 0.2




  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
  
}

function draw() 
{
  background(51);
  image(bg_img,0,0,displayWidth+80,displayHeight);

  push();
  imageMode(CENTER);
  if(fruit!=null){
    image(food,fruit.position.x,fruit.position.y,70,70);
  }
  pop();

  rope.show();

  Engine.update(engine);
  ground.show();
  drawSprites();
   
}


// definir a função drop(), onde vamos partir a corda usando a função rope.break(), e removeremos a
// restrição da fruta usando a função fruit_con.detach()






