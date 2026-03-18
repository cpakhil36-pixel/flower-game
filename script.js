let garden = document.getElementById("garden");
let message = document.getElementById("message");

let flowers = ["🌸","🌼","🌻","🌷","🌹"];

for(let i=0;i<36;i++){

let tile = document.createElement("div");
tile.classList.add("tile");

tile.innerHTML = flowers[Math.floor(Math.random()*flowers.length)];

tile.addEventListener("click",function(){
tile.innerHTML = "❤️";
message.style.opacity = 1;
});

garden.appendChild(tile);

}
