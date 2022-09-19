const DisplayT = document.querySelector(".affichageT");
const DisplayP = document.querySelector(".affichageP");
const btnGo = document.querySelector('.b1')
const btnPause = document.querySelector('.b2')

const btnReset = document.querySelector('.b3')
const cycle = document.querySelector('h2')

let initialTime = 3;
let pauseTime = 3;
let pause = false;
let nbCycles = 0;
cycle.innerText = `Number of cycle ${nbCycles}`

DisplayT.innerText = `${Math.trunc(initialTime/60)} : ${(initialTime % 60 < 10) ? `0${initialTime % 60}` : initialTime % 60 }`;  
DisplayP.innerText = `${Math.trunc(pauseTime/60)} : ${(pauseTime % 60 < 10) ? `0${pauseTime % 60}` : pauseTime % 60 }`;  

btnGo.addEventListener("click" ,() => {
    initialTime--
    DisplayT.innerText = `${Math.trunc(initialTime/60)} : ${(initialTime % 60 < 10) ? `0${initialTime % 60}` : initialTime % 60 }`; 

    let timer = setInterval(() => {
        if (initialTime > 0 ) {
            initialTime--;
            DisplayT.innerText = `${Math.trunc(initialTime/60)} : ${(initialTime % 60 < 10) ? `0${initialTime % 60}` : initialTime % 60 }`; 
        }
        else if (initialTime == 0 && pauseTime == 0) {
            initialTime = 3;
            pauseTime = 3;
            nbCycles ++;
            cycle.innerText = `Number of cycle ${nbCycles}`
            DisplayT.innerText = `${Math.trunc(initialTime/60)} : ${(initialTime % 60 < 10) ? `0${initialTime % 60}` : initialTime % 60 }`; 
            DisplayP.innerText = `${Math.trunc(pauseTime/60)} : ${(pauseTime % 60 < 10) ? `0${pauseTime % 60}` : pauseTime % 60 }`; 
        }
        else if (initialTime === 0) {
            pauseTime--;
            DisplayP.innerText = `${Math.trunc(pauseTime/60)} : ${(pauseTime % 60 < 10) ? `0${pauseTime % 60}` : pauseTime % 60 }`;  
        }
       
        
    }, 1000 )
})