var can=document.querySelector('canvas');
can.width=window.innerWidth;
can.height=window.innerHeight;
var c=can.getContext('2d');


const XSTARTINGOFGAME=100;
const YSTARTINGOFGAME=100;
const WIDTHOFGAME=600;
const HEIGTHOFGAME=600;



              // tail    // head
var lightRay=[[[300,300],[400,200]],[[100,200],[200,200]]];
              // tail   // head

var lightRayVelocity=[];
var  collisionPoint=[];


function initialiseCollisionPoint(){

    let len=lightRay.length;
   
    for(let i=0;i<len;i++){
        collisionPoint.push( [[undefined,undefined]]);
    }

}
initialiseCollisionPoint();



var  collisionDone=[];
function initialiseCollisionDone(){

    let len=lightRay.length;
    
    for(let i=0;i<len;i++){
        collisionDone.push(false);
    }

}
initialiseCollisionDone();
const VELOCITYSCALING=5;
var lightRayVelocity=[[[1*VELOCITYSCALING,-1*VELOCITYSCALING],[1*VELOCITYSCALING,-1*VELOCITYSCALING]],[[1*VELOCITYSCALING,0*VELOCITYSCALING],[1*VELOCITYSCALING,0*VELOCITYSCALING]]];

function drawBackGround(){
    c.beginPath();
    c.moveTo(XSTARTINGOFGAME,YSTARTINGOFGAME);
    c.lineTo(XSTARTINGOFGAME+WIDTHOFGAME,YSTARTINGOFGAME);
    c.lineTo(XSTARTINGOFGAME+WIDTHOFGAME,YSTARTINGOFGAME+HEIGTHOFGAME);
    c.lineTo(XSTARTINGOFGAME,YSTARTINGOFGAME+HEIGTHOFGAME);
    c.lineTo(XSTARTINGOFGAME,YSTARTINGOFGAME);
    c.strokeStyle="black";
    c.stroke();
}

function drawRay(i){
   
        c.beginPath();
        c.moveTo(lightRay[i][0][0],lightRay[i][0][1]);
        if(collisionPoint[i][0][1]!=undefined && collisionPoint[i][0][0]!=undefined){
            c.lineTo(collisionPoint[i][0][0],collisionPoint[i][0][1]);  
        }
        c.lineTo(lightRay[i][1][0],lightRay[i][1][1]);
        c.strokeStyle="red";
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
    if(collisionPoint[i][0][1]!=undefined && collisionPoint[i][0][0]!=undefined){
        if(collisionDone[i]==true){
            collisionDone[i]=false;
            if(lightRay[i][1][0]<=XSTARTINGOFGAME){
                lightRayVelocity[i][1][0]=-lightRayVelocity[i][1][0];
            }
            else if(lightRay[i][1][0]>=(XSTARTINGOFGAME+WIDTHOFGAME)){
                lightRayVelocity[i][1][0]=-lightRayVelocity[i][1][0];
            }
            else if(lightRay[i][1][1]<=YSTARTINGOFGAME){
                lightRayVelocity[i][1][1]=-lightRayVelocity[i][1][1];
            }
            else if(lightRay[i][1][1]>=(YSTARTINGOFGAME+HEIGTHOFGAME)){
                lightRayVelocity[i][1][1]=-lightRayVelocity[i][1][1];
            }  
            
        }
    }
   
    if(collisionPoint[i][0][1]!=undefined && collisionPoint[i][0][0]!=undefined){
            if(lightRay[i][0][0]==XSTARTINGOFGAME){
                lightRayVelocity[i][0][0]=-lightRayVelocity[i][0][0];
                collisionPoint[i][0][1]=undefined;
                collisionPoint[i][0][0]=undefined;
            }
            if(lightRay[i][0][0]==(XSTARTINGOFGAME+WIDTHOFGAME)){
                lightRayVelocity[i][0][0]=-lightRayVelocity[i][0][0];
                collisionPoint[i][0][1]=undefined;
                collisionPoint[i][0][0]=undefined;
            }
           
            if(lightRay[i][0][1]==YSTARTINGOFGAME){
                lightRayVelocity[i][0][1]=-lightRayVelocity[i][0][1];
                collisionPoint[i][0][1]=undefined;
                collisionPoint[i][0][0]=undefined;
            }
            if(lightRay[i][0][1]==(YSTARTINGOFGAME+HEIGTHOFGAME)){
                lightRayVelocity[i][0][1]=-lightRayVelocity[i][0][1];
                collisionPoint[i][0][1]=undefined;
                collisionPoint[i][0][0]=undefined;
            }  
        
    }

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
    touchedBorderAnyRay();
}
main();

function touchedBorderAnyRay(){
    for(let i=0;i<lightRay.length;i++){
        if(touchedBorder(i)==true){
            collisionPoint[i][0][0] = lightRay[i][1][0];
            collisionPoint[i][0][1] = lightRay[i][1][1];
            collisionDone[i]=true;
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
