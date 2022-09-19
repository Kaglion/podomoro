const DisplayT = document.querySelector(".affichageT");
const DisplayP = document.querySelector(".affichageP");
const btnGo = document.querySelector('.b1')
const btnPause = document.querySelector('.b2')

const btnReset = document.querySelector('.b3')
const cycle = document.querySelector('h2')

let initialTime = 1800;
let pauseTime = 300;
let pause = false;
let nbCycles = 0;
cycle.innerText = `Number of cycle ${nbCycles}`

DisplayT.innerText = `${Math.trunc(initialTime/60)} : ${(initialTime % 60 < 10) ? `0${initialTime % 60}` : initialTime % 60 }`;  
DisplayP.innerText = `${Math.trunc(pauseTime/60)} : ${(pauseTime % 60 < 10) ? `0${pauseTime % 60}` : pauseTime % 60 }`;  