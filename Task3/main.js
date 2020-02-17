const canv=document.getElementById("canvas");
const context=canv.getContext("2d");
const buttons = document.querySelectorAll('input');
let mode = '';

let playX=playY=10;
let gridSize=20;
let appleX=Math.floor(Math.random()*gridSize);
let appleY=Math.floor(Math.random()*gridSize);
let x=y=0;
let trail=[];
let tail = 1;
function gameB() {
    context.clearRect(0, 0, canvas.width, canvas.height)
    playX+=x;
    playY+=y;
    if(playX<0) {
        playX= gridSize-1;
    }
    if(playX>gridSize-1) {
        playX= 0;
    }
    if(playY<0) {
        playY= gridSize-1;
    }
    if(playY>gridSize-1) {
        playY= 0;
    }
    context.fillStyle="green";
    context.fillRect(0,0,canv.width,canv.height);
 
    context.fillStyle="black";
    for(var i=0;i<trail.length;i++) {
        context.fillRect(trail[i].x*gridSize,trail[i].y*gridSize,gridSize-2,gridSize-2);
        if(trail[i].x==playX && trail[i].y==playY) {
            tail = 1;
        }
    }
    trail.push({x:playX,y:playY});
    while(trail.length>tail) {
    trail.shift();
    }
 
    if(appleX==playX && appleY==playY) {
        tail++;
        appleX=Math.floor(Math.random()*gridSize);
        appleY=Math.floor(Math.random()*gridSize);
    }
    context.fillStyle="red";
    context.fillRect(appleX*gridSize,appleY*gridSize,gridSize-2,gridSize-2);
}
function gameA() {
    context.clearRect(0, 0, canvas.width, canvas.height)
    playX+=x;
    playY+=y;
    if(playX<0) {
        tail = 0;
    }
    if(playX>gridSize-1) {
        tail = 0;
    }
    if(playY<0) {
        tail = 0;
    }
    if(playY>gridSize-1) {
        tail = 0;
    }
    context.fillStyle="green";
    context.fillRect(0,0,canv.width,canv.height);
 
    context.fillStyle="black";
    
    for(var i=0;i<trail.length;i++) {
        context.fillRect(trail[i].x*gridSize,trail[i].y*gridSize,gridSize-2,gridSize-2);
        if(appleX==playX && appleY==playY) {
            tail++;
            appleX=Math.floor(Math.random()*gridSize);
            appleY=Math.floor(Math.random()*gridSize);
        }

    }
    trail.push({x:playX,y:playY});
    
    while(trail.length>tail) {
        trail.shift();
    }
    context.fillStyle="red";
    context.fillRect(appleX*gridSize,appleY*gridSize,gridSize-2,gridSize-2);
}
function keyPush(evt) {
    switch(evt.keyCode) {
        case 37:
            x=-1;y=0;
            break;
        case 38:
            x=0;y=-1;
            break;
        case 39:
            x=1;y=0;
            break;
        case 40:
            x=0;y=1;
            break;
    }
}

function modeGame(e) {
    mode = e.target.name;
    playX=playY=10;
    appleX=Math.floor(Math.random()*gridSize);
    appleY=Math.floor(Math.random()*gridSize);
    x=y=0;
    trail=[];
    tail = 1;
}
function check() {
    if(mode == 'modeB')  {
        gameB();
    }
    if(mode == 'modeA')  {
        gameA();
    }
}
let myInterval = setInterval(check,100);

buttons.forEach(button => button.addEventListener('click', modeGame));
document.addEventListener("keydown",keyPush);
