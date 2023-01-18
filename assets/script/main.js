let interaction = document.querySelector('a:nth-of-type(2)')

// console.log(document.querySelector('a:nth-of-type(4)'))

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

const anouk = 'Anouk';
console.log(anouk)

let frontend = document.querySelector('a:nth-of-type(1)')

frontend.addEventListener('click', flipHandler)
frontend.addEventListener('animationend', flipHandler)

function flipHandler() {
  frontend.classList.toggle('flip')
}

