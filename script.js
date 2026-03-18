
function start(){

let flowers = [
"blackrose.png",
"lavander.webp",
"meeronrose.webp",
"sunflower.png",
"whiterose.png"
];

for(let i=0;i<25;i++){

let f = document.createElement("div");
f.classList.add("flower");

let img = document.createElement("img");

img.src = flowers[Math.floor(Math.random()*flowers.length)];

f.style.left = Math.random()*100 + "%";

f.appendChild(img);

document.body.appendChild(f);
}
img.style.width = "40px";
img.style.objectFit = "contain";
