/* 1e */
let frontend = document.querySelector('a:nth-of-type(1)')

frontend.addEventListener('click', frontendHandler)
frontend.addEventListener('animationend', frontendHandler)

function frontendHandler() {
  frontend.classList.toggle('frontend')
}

/* 2e */
let interaction = document.querySelector('a:nth-of-type(2)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

/* 3e */
let and = document.querySelector("a:nth-of-type(3)");
and.addEventListener("click", hangHandler);
and.addEventListener("animationend", hangHandler);
function hangHandler() {
  and.classList.toggle("hang");
}

/* 4e */
let development = document.querySelector('a:nth-of-type(4)')
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




