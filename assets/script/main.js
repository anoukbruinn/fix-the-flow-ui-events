let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}


let userflow = document.querySelector('a:nth-of-type(13)')

userflow.addEventListener('click', shakeHandler)
userflow.addEventListener('animationend', shakeHandler)

function shakeHandler() {
  userflow.classList.toggle('shake')
}

let frontend = document.querySelector('a:nth-of-type(1)')

frontend.addEventListener('click', flipHandler)
frontend.addEventListener('animationend', flipHandler)

function flipHandler() {
  frontend.classList.toggle('flip')
}

let design = document.querySelector('a:nth-of-type(1)')

design.addEventListener('click', flipHandler)
design.addEventListener('animationend', flipHandler)

function flipHandler() {
  design.classList.toggle('flip')
}

