let board = document.getElementById("game-board");

let flowers = ["🌸","🌼","🌻","🌷","🌹"];

for(let i=0;i<64;i++){

let tile = document.createElement("div");
tile.classList.add("tile");

let randomFlower = flowers[Math.floor(Math.random()*flowers.length)];

tile.innerHTML = randomFlower;

board.appendChild(tile);

}
