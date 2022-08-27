var can=document.querySelector('canvas');
can.width=window.innerWidth;
can.height=window.innerHeight;
var c=can.getContext('2d');


const XSTARTINGOFGAME=100;
const YSTARTINGOFGAME=100;
const WIDTHOFGAME=600;
const HEIGTHOFGAME=600;

function drawBackGround(){
    c.beginPath();
    c.moveTo(XSTARTINGOFGAME,YSTARTINGOFGAME);
    c.lineTo(XSTARTINGOFGAME+WIDTHOFGAME,YSTARTINGOFGAME);
    c.lineTo(XSTARTINGOFGAME+WIDTHOFGAME,YSTARTINGOFGAME+HEIGTHOFGAME);
    c.lineTo(XSTARTINGOFGAME,YSTARTINGOFGAME+HEIGTHOFGAME);
    c.lineTo(XSTARTINGOFGAME,YSTARTINGOFGAME);
    c.stroke();
}

               // tail    // head
var lightRay=[[[100,500],[200,400]]];//,[[200,200],[200,400]]];

// const VELOCITYOFLIGHTRAYS=1;


// function initialiseVelocities(){


// }
                     // tail    // head
var lightRayVelocity=[[[1,-1],[1,-1]]];//,[[1,0],[1,0]]];

// collisionPoint in general is head
//var collisionPoint=[[]];

function drawRay(i){
    c.beginPath();
    c.moveTo(lightRay[i][0][0],lightRay[i][0][1]);
    c.lineTo(lightRay[i][1][0],lightRay[i][1][1]);
    c.stroke();
}

function drawRays(){
    for(let i=0;i<lightRay.length;i++){
        drawRay(i);
    }
}

function draw(){
    drawRays();
    drawBackGround();
}


function updateHead(i){
    lightRay[i][1][0]=lightRay[i][1][0]+lightRayVelocity[i][1][0];
    lightRay[i][1][1]=lightRay[i][1][1]+lightRayVelocity[i][1][1];
}


function updateTail(i){
    lightRay[i][0][0]=lightRay[i][0][0]+lightRayVelocity[i][0][0];
    lightRay[i][0][1]=lightRay[i][0][1]+lightRayVelocity[i][0][1];
}


function updateRay(i){
    updateHead(i);
    updateTail(i);
}

function updateRays(){
    for(let i=0;i<lightRay.length;i++){
        updateRay(i);
    }
}

function update(){
    c.clearRect(0,0,can.width,can.height);
    updateRays();
}


function main(){
    requestAnimationFrame(main);
    update();
    draw();
}
main();

var collisionPoint=[[[undefined],[undefined]]];

function touchedBorderAnyRay(){
    for(let i=0;i<lightRay.length;i++){
        if(touchedBorder==true){
            collisionPoint[i][0] = lightRay[i][1][0];
            collisionPoint[i][1] = lightRay[i][1][1];
        }
    }

}

function touchedBorder(i){
    if(lightRay[i][1][0]<=XSTARTINGOFGAME || lightRay[i][1][0]>=XSTARTINGOFGAME+WIDTHOFGAME){
        return true;
    }
    
    else if(lightRay[i][1][1]<=YSTARTINGOFGAME || lightRay[i][1][1]>=YSTARTINGOFGAME+HEIGTHOFGAME){
        return true;}
    
        return false;
}


function reflectRay(i){

}





