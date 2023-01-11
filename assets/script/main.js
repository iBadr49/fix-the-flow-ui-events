



/*----12---- Interactie Animatie*/

let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

/*----1---- Frontend Animatie*/

let frontend = document.querySelector('a:nth-of-type(1)')

frontend.addEventListener('click', colorAnimation)
frontend.addEventListener('animationend', colorAnimation)

function colorAnimation() {
  frontend.classList.toggle('colorAni')
}

/*----2---- Design Animatie*/

let design = document.querySelector('a:nth-of-type(2)')

design.addEventListener('click', designRotate)
design.addEventListener('animationend', designRotate)

function designRotate() {
  design.classList.toggle('rotate')
}

/*----3---- & Animatie*/
let flipy = document.querySelector('a:nth-of-type(3)')

flipy.addEventListener('click', flipymove)
flipy.addEventListener('animationend', flipymove)

function flipymove() {
  flipy.classList.toggle('flipy')
}

/*----4---- Development Animatie*/
let helicopter = document.querySelector('a:nth-of-type(4)')

helicopter.addEventListener('click', helimove)
helicopter.addEventListener('animationend', helimove)

function helimove() {
  helicopter.classList.toggle('helicopter')
}

/*----5---- Sprint V Animatie*/
let upanddown = document.querySelector('a:nth-of-type(5)')

upanddown.addEventListener('click', updownmove)
upanddown.addEventListener('animationend', updownmove)

function updownmove() {
  upanddown.classList.toggle('upanddown')
}

/*----6---- Fix Animatie*/
let driehoekje  = document.querySelector('a:nth-of-type(6)')

driehoekje.addEventListener('click', driehoekmove)
driehoekje.addEventListener('animationend', driehoekmove)

function driehoekmove() {
  driehoekje.classList.toggle('driehoekje')
}

/*----8---- flow Animatie*/
let ruit  = document.querySelector('a:nth-of-type(8)')

ruit.addEventListener('click', ruitmove)
ruit.addEventListener('animationend', ruitmove)

function ruitmove() {
  ruit.classList.toggle('ruit')
}

