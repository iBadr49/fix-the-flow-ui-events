



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

flipy.addEventListener('click', flipytikky)
flipy.addEventListener('animationend', flipytikky)

function flipytikky() {
  flipy.classList.toggle('flipy')
}