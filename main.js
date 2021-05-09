//function to draw spritegrid on background

const gameWindow = document.getElementById("gameWindow");

// 16 x 16 grid of 64px x 64px squares


function drawBGSpriteGrid(){
    for(let i = 0; i < 256; i++){
        let bgSpriteChunk = document.createElement("div");
        bgSpriteChunk.id = "bgSprite-" + i;
        bgSpriteChunk.classList.add("bgSpriteChunk");
        gameWindow.appendChild(bgSpriteChunk);
    }
}

drawBGSpriteGrid();

//function to move player sprite

const playerChar = document.getElementById("playerChar");
let playerPosX = 512;
let playerPosY = 512;

window.addEventListener("keydown", e => {
    if(e.code == "ArrowLeft"){

        playerChar.style.left = playerPosX + "px";
        console.log("move left");
        playerChar.style.transform = "translateX(-64px)";
        playerChar.style.left = (playerPosX - 64) + "px";
        playerPosX = playerPosX - 64;
        console.log(playerPosX + ", " + playerPosY);
    }
    if(e.code == "ArrowRight"){
        playerChar.style.left = playerPosX + "px";
        console.log("move right");
        playerChar.style.transform = "translateX(64px)";
        playerChar.style.left = (playerPosX + 64) + "px";
        playerPosX = playerPosX + 64;
        console.log(playerPosX + ", " + playerPosY);
    }
    if(e.code == "ArrowUp"){
        playerChar.style.top = playerPosY + "px";
        console.log("move up");
        playerChar.style.transform = "translateY(-64px)";
        playerChar.style.top = (playerPosY - 64) + "px";
        playerPosY = playerPosY - 64;
        console.log(playerPosX + ", " + playerPosY);
    }
    if(e.code == "ArrowDown"){
        playerChar.style.top = playerPosY + "px";
        console.log("move down");
        playerChar.style.transform = "translateY(64px)";
        playerChar.style.top = (playerPosY + 64) + "px";
        playerPosY = playerPosY + 64;
        console.log(playerPosX + ", " + playerPosY);
    }
    //console.log(e);
});


