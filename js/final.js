var canvas = document.getElementById("mycanvas");
noStroke();
var height = canvas.height;
var width = canvas.width;
var c = -30;
var r = 51;
var g = 198;
var b = 156;
var e = 200;
var u = 500;

var context = canvas.getContext('2d');
      var imageObj = new Image();

      imageObj.onload = function() {
        context.drawImage(imageObj, 0, 0);
      };
      imageObj.src = 'japan.jpg';

void setup(){
    size(width,height);
};

void car(x,y,r,g,b){
    fill(r,g,b);
    rect(x,y,60,27);
    rect(x+15,y-15,30,15);
    fill(255,255,255);
    rect(x+15,y-15,20,16);
    fill(0,0,0);
    ellipse(x+25,y-5,10,10);
    ellipse(x+15,y+30,15,15);
    ellipse(x+45,y+30,15,15);
};
void road(y){
    fill(255,170,0);
    rect(0,y,width,2);
};
void sun(x,y,r,g,b){
    fill(222,196,25);
    ellipse(x-15,y+15,80,80);
    fill(225,129,19);
    ellipse(x-15,y+15,40,40);
};
void biulding(x,y,r,g,b){
    fill(21,21,135);
    rect(x-15,y+15,90,80);
    fill(0,0,0);
    rect(x+10,y+45,40,50);
    fill(255,255,255);
    rect(x+28,y+45,3,50);
    ellipse(x+20,y+75,5,5);
    ellipse(x+40,y+75,5,5);
};
void ground(y){
    fill(51,25,0);
    rect(0,y,width,200);
}

//void draw(){
////    background(196,242,249);
//    fill(196,242,249);
//    rect(0,100,width,height);
//    fill(33,33,33);
//    rect(0,305,width,50);
//    road(330);
//    ground(350);
//    biulding(u,210,21,21,135);
//     u+=1;
//    if (u >= width){
//        u=-100;
//    }
//    sun(e,80,222,196,25);
//    e+=1;
//    if (e >= width){
//        e=-100;
//    }
//    car(c,290,r,g,b);
//    c-=1;
//    if (c <= 0){
//        c = 600;
//    }
//};
