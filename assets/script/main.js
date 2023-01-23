let frontend = document.querySelector('a:nth-of-type(1)')

frontend.addEventListener('click', flipHandler)
frontend.addEventListener('animationend', flipHandler)

function flipHandler() {
  frontend.classList.toggle('flip')
}


let interaction = document.querySelector('a:nth-of-type(2)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

let and = document.querySelector("a:nth-of-type(3)");
and.addEventListener("click", hangHandler);
and.addEventListener("animationend", hangHandler);
function hangHandler() {
  and.classList.toggle("hang");
}

let document = document.querySelector('a:nth-of-type(4)')

frontend.addEventListener('click', flipHandler)
frontend.addEventListener('animationend', flipHandler)

function flipHandler() {
  frontend.classList.toggle('flip')
}


let userflow = document.querySelector('a:nth-of-type(13)')

userflow.addEventListener('click', shakeHandler)
userflow.addEventListener('animationend', shakeHandler)

function shakeHandler() {
  userflow.classList.toggle('shake')
}




