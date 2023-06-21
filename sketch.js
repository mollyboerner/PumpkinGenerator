let pumpkins=[];
let wide = 0;
let tall = 0;
let x = 0;
let y = 0;


function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100)
  let pumpkin1 = {
    x: width/2, //centers start pumpkin
    y: height/2, //centers start pumpkin
    tall: height*0.6, //felt like a good pumpkin height
    wide: width*0.4,  //width of center ellipse
    h: 33,
    sat: 60,
    bright: 100,
  }
  
  wide = pumpkin1.wide;
  tall = pumpkin1.tall;
  x = pumpkin1.x;
  y = pumpkin1.y;
  
  let stem1 = {
    wide: wide/4,
    x1: x - wide/7,
    y1: y - tall/1.6,
    x2: x + wide/7,
    y2: y - tall/1.6,
    x3: x,
    y3: y,
    h: 78,
    sat: 88,
    bright:55,
  }
  
  pumpkins = [[pumpkin1,stem1]]
 
}

function draw() {
  background(73,88,45)
  drawPumpkin()
}

function drawPumpkin(){
  
  strokeWeight(4);
  
  //STEM
  //triangle drawn at the top of the center ellipse
  //Top left point is picked randomly with constraints, respective to center coordinates of pumpkin
  
  fill(pumpkins[0][1].h,pumpkins[0][1].sat,pumpkins[0][1].bright)
    
  triangle(pumpkins[0][1].x1,pumpkins[0][1].y1,pumpkins[0][1].x2,pumpkins[0][1].y2,pumpkins[0][1].x3,pumpkins[0][1].y3); 
  
  
  //DISPLACEMENT OF SIDE ELLIPSES
  //3.8 used because I thought it looked best, can be adjusted
  //Increasing 3.8 will move ellipses closer from eachother
  //Decreasing 3.8 will move ellipses farther from eachother
  
  displace = wide/3.8; 
  
  fill(pumpkins[0][0].h,pumpkins[0][0].sat,pumpkins[0][0].bright);
  stroke(pumpkins[0][0].h-5,100,100)
  
  //OUTER ELLIPSES
  // 0.9 and 1.7 used at the discretion of the artist
  //outerAdj differentiates heights of the ellipses for perspective
  //dFactor adjusts the displacement a little to create more perepective
  
  outerAdj = 0.9;
  dFactor = 1.7;
  ellipse(x-dFactor*displace,y,wide,tall*outerAdj);
  ellipse(x+dFactor*displace,y,wide,tall*outerAdj);
  
  //INNER ELLIPSES
  //innerAdj differentiates heights of the ellipses for perspective
  
  innerAdj = 0.96;
  ellipse(x-displace,y,wide,tall*innerAdj);
  ellipse(x+displace,y,wide,tall*innerAdj);
  
  //CENTER ELLIPSE
  
  ellipse(x,y,wide,tall);
}

function mousePressed(){
  //randomizes pumpkin size
  //0.2, 0.5, 0.85 based off of my perception of what looks hawt
  
  pumpkins[0][0].tall = random(height*0.2, height*0.7);
  pumpkins[0][0].wide = random(width*0.2,width*0.5);
  
  wide = pumpkins[0][0].wide;
  tall = pumpkins[0][0].tall;
  
  //randomizes placement of top left point on stem
  //can adjust numbers to adjust range of heights and widths
  
  pumpkins[0][1].x1 = x - random(wide/8,wide/5);
  pumpkins[0][1].y1 = y - random(tall/1.5,tall/1.8);
  pumpkins[0][1].y2 = pumpkins[0][1].y1;
  
  //randomizes width of stem
  
  pumpkins[0][1].wide = random(wide/5,wide/2.5);
  pumpkins[0][1].x2 =  pumpkins[0][1].x1+pumpkins[0][1].wide;
  
}

function keyPressed(){
  //randomizes pumpkin color
  pumpkins[0][0].h = random(24,50);
  pumpkins[0][0].sat = random(75,100);
  
  //randomizes stem color
  pumpkins[0][1].h = random(79,121);
  pumpkins[0][1].sat = random(57,100);
  pumpkins[0][1].bright = random(42,50);
  
  
  
}