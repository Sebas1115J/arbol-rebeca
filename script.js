const fechaInicio = new Date("2026-01-11")

function contador(){

const ahora=new Date()

const diff=ahora-fechaInicio

const dias=Math.floor(diff/(1000*60*60*24))
const horas=Math.floor((diff/(1000*60*60))%24)
const minutos=Math.floor((diff/(1000*60))%60)
const segundos=Math.floor((diff/1000)%60)

document.getElementById("contador").innerHTML=

"Nuestro árbol lleva creciendo:<br>"+

dias+" días "+
horas+" horas "+
minutos+" minutos "+
segundos+" segundos"

}

setInterval(contador,1000)

function arbol(){

const dias=Math.floor((new Date()-fechaInicio)/(1000*60*60*24))

let emoji="🌱"

if(dias>7) emoji="🌿"
if(dias>30) emoji="🌳"
if(dias>90) emoji="🌳🌸"
if(dias>180) emoji="🌳🌸🌸"

document.getElementById("arbol").innerHTML=emoji

}

arbol()

const mensajes=[

"Me encanta tu sonrisa",

"Tu mirada me desarma",

"Contigo todo es más bonito",

"Nuestro árbol sigue creciendo",

"Me gustas mucho Rebeca",

"Gracias por aparecer en mi vida"

]

function mostrarMensaje(){

const r=Math.floor(Math.random()*mensajes.length)

document.getElementById("mensaje").innerText=mensajes[r]

}

const playlist=[

"music/all_of_me.mp3",
"music/perfect.mp3",
"music/until_i_found_you.mp3"

]

function playSong(i){

const player=document.getElementById("player")

player.src=playlist[i]

player.play()

}

function petalos(){

for(let i=0;i<25;i++){

const p=document.createElement("div")

p.className="petalo"

p.innerHTML="🌸"

p.style.left=Math.random()*100+"vw"

p.style.animationDuration=(5+Math.random()*5)+"s"

document.body.appendChild(p)

}

}

petalos()

function corazones(){

for(let i=0;i<15;i++){

const c=document.createElement("div")

c.className="corazon"

c.innerHTML="❤️"

c.style.left=Math.random()*100+"vw"

c.style.animationDuration=(6+Math.random()*6)+"s"

document.body.appendChild(c)

}

}

corazones()

function modoNoche(){

const hora=new Date().getHours()

if(hora>=19 || hora<=6){

document.body.classList.add("noche")

}

}

modoNoche()

function verFoto(img){

document.getElementById("fotoGrande").style.display="flex"

document.getElementById("imgGrande").src=img.src

}

function cerrarFoto(){

document.getElementById("fotoGrande").style.display="none"

}