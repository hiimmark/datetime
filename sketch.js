const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var bg1
var engine, world;
var backgroundImg;

var bg ;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(bg1){
        background(bg1);  
    }

    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var parsed = await response.json();
    var parse = parsed.datetime
    var hr = parse.slice(11,13)
    console.log(hr)
    var bgpic;
    if(hr>=04 && hr <=06){
        bgpic = "sunrise1.png"
    }
    else if(hr>=06 && hr <= 08){
        bgpic = "sunrise2.png"
    }
    else if (hr>= 08 && hr <= 9){
        bgpic = "sunrise3.png"
    }
    else if (hr >= 9 && hr <= 10){
        bgpic = "sunrise4.png"
    }
    else if (hr >= 10 && hr <= 12){
        bgpic = "sunrise5.png"
    }
    else if (hr >= 12 && hr <= 13){
        bgpic = "sunrise6.png"
    }
    else if (hr >= 13 && hr <= 15){
        bgpic = "sunset7.png"
    }
    else if (hr >= 15 && hr <= 17){
        bgpic = "sunset8.png"
    }
    else if(hr >= 17 && hr <= 23){
        bgpic = "sunset9.png"
    }
    else if(hr >= 23 && hr==0){
        bgpic = "sunset10.png"
    }
    else if(hr == 0 && hr <= 03){
        bgpic = "sunset11.png"
    }
    else{
        bgpic = "sunset12.png"
    }
    bg1 = loadImage(bgpic)

}
