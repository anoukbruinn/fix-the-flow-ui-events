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
and.addEventListener("click", andHandler);
and.addEventListener("animationend", andHandler);
function andHandler() {
  and.classList.toggle("and");
}

/* 4e */
let development = document.querySelector('a:nth-of-type(4)')
development.addEventListener('click', developmentHandler)
development.addEventListener('animationend', developmentHandler)

function developmentHandler() {
  development.classList.toggle('development')
}


/* 13e */ 
let userflow = document.querySelector('a:nth-of-type(13)')

userflow.addEventListener('click', shakeHandler)
userflow.addEventListener('animationend', shakeHandler)

function shakeHandler() {
  userflow.classList.toggle('shake')
}

/* 5e */ 
let sprint = document.querySelector("a:nth-of-type(5)");
sprint.addEventListener("click", sprintHandler);
sprint.addEventListener("animationend", sprintHandler);
function sprintHandler() {
  and.classList.toggle('sprint');
}

/* 6e */
let fix = document.querySelector('a:nth-of-type(6)')

fix.addEventListener('click', fixHandler)
fix.addEventListener('animationend', fixHandler)

function fixHandler() {
  fix.classList.toggle('fix')
}

/* 7e */
let the = document.querySelector('a:nth-of-type(7)')

the.addEventListener('click', theHandler)
the.addEventListener('animationend', theHandler)

function thexHandler() {
  the.classList.toggle('the')
}

