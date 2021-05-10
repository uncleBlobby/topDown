//draw grid on canvas

let gameCanvas = document.getElementById("gameCanvas");
let ctx = gameCanvas.getContext("2d");

let grassSprite = new Image(64, 64);
grassSprite.src = "./sprites/simpleGrass.png";

let wallSprite = new Image(64, 64);
wallSprite.src = "./sprites/stoneWall.png";

let playerSprite = new Image(64, 64);
playerSprite.src = "./sprites/player/playerChar.png";


function loadGrassSprite(){

let grassSprite = new Image();
grassSprite.src = "./sprites/simpleGrass.png";
ctx.drawImage(grassSprite, 0, 0, 64, 64);
console.log(grassSprite);
console.log(grassSprite.src);
}



function drawLineX(x){
    ctx.beginPath();
    ctx.moveTo(x,0);
    ctx.lineTo(x, 1024);
    ctx.stroke();
}

function drawLineY(y){
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(1024, y);
    ctx.stroke();
}

function drawSpriteGrid(){
for (i = 0; i < 1024; i += 64){
    for (j = 0; j < 1024; j += 64){
    ctx.drawImage(grassSprite, i, j, 64, 64);
    }
    //drawLineX(i);
    //drawLineY(i);
}
}

let playerX = 512;
let playerY = 512;

function drawPlayerSprite(){
    //ctx.clearRect(playerX, playerY, 64, 64);
    ctx.drawImage(playerSprite, playerX, playerY, 64, 64);
}
//ctx.drawImage(grassSprite, 0, 0, 64, 64);

grassSprite.onload = function() {
    drawSpriteGrid();
};

playerSprite.onload = function () {
    drawPlayerSprite();
    const playerChar = document.getElementById("playerSprite");
};

window.addEventListener("keydown", e => {
    if(e.code == "ArrowLeft"){
       drawSpriteGrid();
       playerSprite.style.left = playerX + "px";
       console.log("moved left");
       playerSprite.style.transform = "translateX(-64px)";
       playerSprite.style.left = (playerX - 64) + "px";
       playerX = playerX - 64;
       console.log(playerX + ", " + playerY);
       drawPlayerSprite();
    }
    if(e.code == "ArrowRight"){
        drawSpriteGrid();
        playerSprite.style.left = playerX + "px";
        console.log("moved right");
        playerSprite.style.transform = "translateX(64px)";
        playerSprite.style.left = (playerX + 64) + "px";
        playerX = playerX + 64;
        console.log(playerX + ", " + playerY);
        drawPlayerSprite();
    }
    if(e.code == "ArrowUp"){
        drawSpriteGrid();
        playerSprite.style.top = playerY + "px";
        console.log("moved up");
        playerSprite.style.transform = "translateY(-64px)";
        playerSprite.style.top = (playerY - 64) + "px";
        playerY = playerY - 64;
        console.log(playerX + ", " + playerY);
        drawPlayerSprite();
     }
     if(e.code == "ArrowDown"){
         drawSpriteGrid();
         playerSprite.style.top = playerY + "px";
         console.log("moved up");
         playerSprite.style.transform = "translateY(64px)";
         playerSprite.style.top = (playerY + 64) + "px";
         playerY = playerY + 64;
         console.log(playerX + ", " + playerY);
         drawPlayerSprite();
     }        
});


