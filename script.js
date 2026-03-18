function start(){

let flowers = ["blackrose.png","whiterose.png","meeronrose.webp"];

for(let i=0;i<40;i++){

let f = document.createElement("div");
f.classList.add("rose");

let img = document.createElement("img");

img.src = flowers[Math.floor(Math.random()*flowers.length)];

f.style.left = Math.random()*100 + "%";

f.appendChild(img);

document.body.appendChild(f);
}

setTimeout(()=>{
document.getElementById("message").style.opacity = 1;
},2000);

}
