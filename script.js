const fechaInicio = new Date("2026-01-11T15:00:00")

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

"Me gustas muchisimo",

"Gracias por aparecer en mi vida"

"Eres ese pensamiento bonito que aparece sin avisar y se queda todo el día"

"Si pudiera elegir mil veces, mil veces te elegiría a ti"

"No sé cómo lo haces, pero contigo todo se siente en paz"

"Eres mi lugar favorito en este mundo"

"Tu sonrisa tiene el poder de arreglar cualquier día malo"

"Quererte es lo más natural que me ha pasado en la vida"

"No eres perfecta… eres mejor, eres tú"

"Desde que llegaste, todo tiene más sentido"

"Contigo entendí que el amor no se busca, se siente"

"Eres esa casualidad que quiero convertir en destino"

"No quiero un para siempre perfecto, te quiero a ti, real, todos los días"

"Contigo me nacen las ganas de hacer las cosas bien"

"Desde que te vi supe que eras la persona correcta"

"Adoro todo de ti"

"Eres preciosa, sexy y adorable"

]

function mostrarMensaje(){

const r=Math.floor(Math.random()*mensajes.length)

document.getElementById("mensaje").innerText=mensajes[r]

}

const playlist=[

"music/La_vida_en_un_beso.mp3",
"music/All_of_me.mp3",
"music/Angelica.mp3"
"music/Como_dormiste.mp3",
"music/ADMV.mp3",
"music/Nothing_else_matters.mp3"
"music/Relacion.mp3",
"music/Te_vi_venir.mp3",

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
