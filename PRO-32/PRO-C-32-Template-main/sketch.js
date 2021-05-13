const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
 getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(900,600);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
    background(backgroundImg)
    Engine.update(engine);
}

async function getBackgroundImg(){
    var response = await fetch("http://worldclockapi.com/api/json/est/now")
    var responseJSON = await response.json();
    var datetime = responseJSON.currentDateTime;
    var hour = datetime.slice(11,13)
    if (hour>=4 && hour<=6){
        bg = "sunrise1.png"
    }else if (hour>=6 && hour<=8){
        bg = "sunrise2.png"
    }else if (hour>=8 && hour<=9){
        bg = "sunrise3.png"
    }else if (hour>=9 && hour<=11){
        bg = "sunrise4.png"
    }else if (hour>=11 && hour<=12){
        bg = "sunrise5.png"
    }else if (hour>=12 && hour<=16){
        bg = "sunrise6.png"
    }else if (hour>=16 && hour<=17){
        bg = "sunset7.png"
    }else if (hour>=17 && hour<=19){
        bg = "sunset8.png"
    }else if (hour>=19 && hour<=20){
        bg = "sunset10.png"
    }else if (hour>=20 && hour<=22){
        bg = "sunset11.png"
    }else{
        bg = "sunset12.png"
    }
    backgroundImg = loadImage(bg);
    
    console.log(hour)
}
