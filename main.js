function preload(){
    img=loadImage("https://cdn.britannica.com/05/88205-050-9EEA563C/Bigmouth-buffalo-fish.jpg");
}

function setup(){
    canvas=createCanvas(500,500);
}

function draw(){
    image(img,200,250,50,50);
    fill("green");
    stroke("black");
    rect(50,30,400,40);
    rect(50,430,400,40);
    rect(30,50,40,400);
    rect(430,50,40,400);
    fill("red");
    circle(50,50,50);
    circle(50,450,50);
    circle(450,50,50);
    circle(450,450,50);
    
}



function take_snapshot(){
    save("mypic.png");
}
