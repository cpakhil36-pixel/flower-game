let garden = document.getElementById("garden");

let flowers = ["🌸","🌼","🌻","🌷","🌹"];

for(let i=0;i<36;i++){

let tile = document.createElement("div");
tile.classList.add("tile");

tile.innerHTML = flowers[Math.floor(Math.random()*flowers.length)];

tile.addEventListener("click",function(){
tile.innerHTML = "❤️";
});

garden.appendChild(tile);
}

// Surprise message
setTimeout(function(){
alert("Hi Shivanya ❤️\nThis little garden is just for you 🌸😊");
},2000);

// Button message
function showMessage(){
alert("Shivanya ❤️\nYou are really special to me 😊🌸");
}
