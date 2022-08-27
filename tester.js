var can=document.querySelector('canvas');
can.width=window.innerWidth;
can.height=window.innerHeight;
var c=can.getContext('2d');


const XSTARTINGOFGAME=100;
const YSTARTINGOFGAME=100;
const WIDTHOFGAME=600;
const HEIGTHOFGAME=600;



              // tail    // head
var lightRay=[[[390,390],[490,290]],[[100,200],[200,200]]];
              // tail   // head

var lightRayVelocity=[];
var  collisionPoint=[[[undefined,undefined]]];

const VELOCITYSCALING=1;
var lightRayVelocity=[[[1*VELOCITYSCALING,-1*VELOCITYSCALING],[1*VELOCITYSCALING,-1*VELOCITYSCALING]],[[1*VELOCITYSCALING,0*VELOCITYSCALING],[1*VELOCITYSCALING,0*VELOCITYSCALING]]];



function initialiseCollisionPoint(){
    let len=lightRay.length;
   //console.log(len);
  // console.log(collisionPoint);
    for(let i=1;i<len;i++){
        collisionPoint.push([[undefined,undefined]]);
        
     //   console.log(collisionPoint);
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
   // if( collisionPoint[i].length == 1 ){
        // c.beginPath();
        // c.moveTo(lightRay[i][0][0],lightRay[i][0][1]);
        // c.lineTo(collisionPoint[i][0][0],collisionPoint[i][0][1]);  
        // c.lineTo(lightRay[i][1][0],lightRay[i][1][1]);
        // c.strokeStyle="red";
        // c.stroke();
   // }
   // else{
        c.beginPath();
        c.moveTo(lightRay[i][0][0],lightRay[i][0][1]);
        for(let j=0;j<collisionPoint[i].length;j++){
            if(collisionPoint[i][j][1]!=undefined && collisionPoint[i][j][0]!=undefined){
                c.lineTo(collisionPoint[i][j][0],collisionPoint[i][j][1]); 
            } 
        c.lineTo(lightRay[i][1][0],lightRay[i][1][1]);
        c.strokeStyle="red";
        c.stroke();
           // }
    }
        
    
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


//var tailNextTarget=[[undefined,undefined],[undefined,undefined]];

// function updateRay(i){
//     updateMoreThanTwoCollisions(i);
//     a=tailNextTargetCounter[i];
//   if(collisionPoint[i][a][1]!=undefined && collisionPoint[i][a][0]!=undefined){
//         if(collisionDone[i]==true){
//             collisionDone[i]=false;
//             if(lightRay[i][1][0]<=XSTARTINGOFGAME){
//                 lightRayVelocity[i][1][0]=-lightRayVelocity[i][1][0];
//             }
//             else if(lightRay[i][1][0]>=(XSTARTINGOFGAME+WIDTHOFGAME)){
//                 lightRayVelocity[i][1][0]=-lightRayVelocity[i][1][0];
//             }
//             else if(lightRay[i][1][1]<=YSTARTINGOFGAME){
//                 lightRayVelocity[i][1][1]=-lightRayVelocity[i][1][1];
//             }
//             else if(lightRay[i][1][1]>=(YSTARTINGOFGAME+HEIGTHOFGAME)){
//                 lightRayVelocity[i][1][1]=-lightRayVelocity[i][1][1];
//             }  
//         }
//     }
//    //console.log(collisionPoint[i][tailNextTargetCounter[i]][0],collisionPoint[i][tailNextTargetCounter[i]][1]);
 
//    if(collisionPoint[i][a][1]!=undefined && collisionPoint[i][a][0]!=undefined){
        
//             if(lightRay[i][0][0]==tailNextTarget[0][0] ){

//                 lightRayVelocity[i][0][0]=-lightRayVelocity[i][0][0];
//                 collisionPoint[i][tailNextTargetCounter[i]][0]=undefined;
//                 collisionPoint[i][tailNextTargetCounter[i]][1]=undefined;
//               //  console.log(collisionPoint);
//             // if(lightRay[i][0][0]==tailNextTarget[0]){
//             //     lightRayVelocity[i][0][0]=-lightRayVelocity[i][0][0];
//             //     collisionPoint[i][tailNextTargetCounter[i]][0]=undefined;
//             //     collisionPoint[i][tailNextTargetCounter[i]][1]=undefined;
//             //     tailNextTargetCounter++;
//              }
           
//             else if(lightRay[i][0][1]==tailNextTarget[0][1]){
//                 lightRayVelocity[i][0][1]=-lightRayVelocity[i][0][1];
//                 collisionPoint[i][tailNextTargetCounter[i]][0]=undefined;
//                 collisionPoint[i][tailNextTargetCounter[i]][1]=undefined;
//                 tailNextTargetCounter[i]=tailNextTargetCounter[i]+1;
//             }
//             // if(lightRay[i][0][1]==tailNextTarget[1]){
//             //     lightRayVelocity[i][0][1]=-lightRayVelocity[i][0][1];
//             //     collisionPoint[i][tailNextTargetCounter[i]][0]=undefined;
//             //     collisionPoint[i][tailNextTargetCounter[i]][1]=undefined;
//             //     tailNextTargetCounter++;
//             // }  
//    }
//     updateHead(i);
//     updateTail(i);
// }


function updateRay(i){
   // for(let j=0;j<collisionPoint[i].length;j++){
       // if(collisionPoint[i][j][1]!=undefined && collisionPoint[i][j][0]!=undefined){
    //         if(collisionDone[i]==true){
    //           //  collisionDone[i]=false;
    //             if(lightRay[i][1][0]<=XSTARTINGOFGAME){

    //                 lightRayVelocity[i][1][0]=-lightRayVelocity[i][1][0];
    //                 collisionPoint[i].push(lightRay[i][1]);
    //                // break;
    //             }
    //             else if(lightRay[i][1][0]>=(XSTARTINGOFGAME+WIDTHOFGAME)){
    //                 lightRayVelocity[i][1][0]=-lightRayVelocity[i][1][0];
    //                 collisionPoint[i].push(lightRay[i][1]);//break;
    //             }
    //             else if(lightRay[i][1][1]<=YSTARTINGOFGAME){
    //                 lightRayVelocity[i][1][1]=-lightRayVelocity[i][1][1];
    //                 collisionPoint[i].push(lightRay[i][1]);//break;
    //             }
    //             else if(lightRay[i][1][1]>=(YSTARTINGOFGAME+HEIGTHOFGAME)){
    //                 lightRayVelocity[i][1][1]=-lightRayVelocity[i][1][1];
    //                 collisionPoint[i].push(lightRay[i][1]);//break;
    //             }  
                
    //        // }
    //    // }
    // }
   
    
    for(let j=0;j<collisionPoint[i].length;j++){
        if(collisionPoint[i][j][1]!=undefined && collisionPoint[i][j][0]!=undefined){
            if(lightRay[i][0][0]<=XSTARTINGOFGAME){
                lightRayVelocity[i][0][0]=-lightRayVelocity[i][0][0];
               //collisionPoint[i][j][1]=undefined;
               //collisionPoint[i][j][0]=undefined;break;
            }
            if(lightRay[i][0][0]>=(XSTARTINGOFGAME+WIDTHOFGAME)){
                lightRayVelocity[i][0][0]=-lightRayVelocity[i][0][0];
                //collisionPoint[i][j][1]=undefined;
                //collisionPoint[i][j][0]=undefined;break;
            }
           
            if(lightRay[i][0][1]<=YSTARTINGOFGAME){
                lightRayVelocity[i][0][1]=-lightRayVelocity[i][0][1];
                //collisionPoint[i][j][1]=undefined;
                //collisionPoint[i][j][0]=undefined;break;
            }
            if(lightRay[i][0][1]>=(YSTARTINGOFGAME+HEIGTHOFGAME)){
                lightRayVelocity[i][0][1]=-lightRayVelocity[i][0][1];
               // collisionPoint[i][j][1]=undefined;
               // collisionPoint[i][j][0]=undefined;break;
            }     
        }
        //console.log("begin");
        //console.log(collisionPoint[i]);
        //console.log("end");
    }  
    updateHead(i);
    updateTail(i);
    }
   
  





//var tailNextTargetCounter=[0,0];

// function updateMoreThanTwoCollisions(i){
// //tailNextTarget;
// let len=collisionPoint[i].length;
// for(let j=0;(collisionPoint[i][j][0]!=undefined && collisionPoint[i][j][0]!=undefined);j++){
//     tailNextTarget[i]=[collisionPoint[i][j][0],collisionPoint[i][j][1]];
//     break;
// }
// }


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
    //console.log(collisionPoint);
    requestAnimationFrame(main);
    update();
    draw();
    touchedBorderAnyRay();
}
main();

var collisionDetector=[false,false];

function touchedBorderAnyRay(){
    for(let i=0;i<lightRay.length;i++){
//        console.log(collisionPoint);
        if(touchedBorder(i)==true){
           // console.log('hi');
            //if(collisionDetector[i]==true){
               // if(collisionPoint[i][collisionPoint[i].length-1]!=lightRay[i][1]){
                    //console.log(lightRay[i][1]);
                    collisionPoint[i].push(lightRay[i][1]);  


                //}  
            
            //else{
               do{ collisionPoint[i][0][0] = lightRay[i][1][0];
                collisionPoint[i][0][1] = lightRay[i][1][1];
                collisionDone[i]=true;
                collisionDetector[i]=true;
               }
               while(1>2);
            
           //}
           }
    }
}

function touchedBorder(i){
    if(lightRay[i][1][0]<=XSTARTINGOFGAME || lightRay[i][1][0]>=XSTARTINGOFGAME+WIDTHOFGAME){
        lightRayVelocity[i][1][0]=-lightRayVelocity[i][1][0];                 
        return true;
    }
    else if(lightRay[i][1][1]<=YSTARTINGOFGAME || lightRay[i][1][1]>=YSTARTINGOFGAME+HEIGTHOFGAME){
        lightRayVelocity[i][1][1]=-lightRayVelocity[i][1][1];                 
        return true;}
        return false;
}





