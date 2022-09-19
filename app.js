const DisplayT = document.querySelector(".affichageT");
const DisplayP = document.querySelector(".affichageP");
const btnGo = document.querySelector('.b1')
const btnPause = document.querySelector('.b2')
const btnReset = document.querySelector('.b3');
const cycle = document.querySelector('h2');
const timesInit = 1800;
const Ptime = 300;


let initialTime = timesInit;
let pauseTime = Ptime;
let pause = false;
let nbCycles = 0;
cycle.innerText = `Number of cycle ${nbCycles}`
let chekInterval = false;

DisplayT.innerText = `${Math.trunc(initialTime/60)} : ${(initialTime % 60 < 10) ? `0${initialTime % 60}` : initialTime % 60 }`;  
DisplayP.innerText = `${Math.trunc(pauseTime/60)} : ${(pauseTime % 60 < 10) ? `0${pauseTime % 60}` : pauseTime % 60 }`;  

btnGo.addEventListener("click" ,() => {

    console.log(chekInterval);

    if (chekInterval == false ) {
        chekInterval = true;

        initialTime--;
        DisplayT.innerText = `${Math.trunc(initialTime/60)} : ${(initialTime % 60 < 10) ? `0${initialTime % 60}` : initialTime % 60 }`; 

        let timer = setInterval(() => {
            if (pause == false && initialTime > 0 ) {
            initialTime--;
            DisplayT.innerText = `${Math.trunc(initialTime/60)} : ${(initialTime % 60 < 10) ? `0${initialTime % 60}` : initialTime % 60 }`; 
            }
            else if (pause == false && initialTime == 0 && pauseTime == 0) {
                initialTime = timesInit;
                pauseTime = Ptime;
                nbCycles ++;
                cycle.innerText = `Number of cycle ${nbCycles}`
                DisplayT.innerText = `${Math.trunc(initialTime/60)} : ${(initialTime % 60 < 10) ? `0${initialTime % 60}` : initialTime % 60 }`; 
                DisplayP.innerText = `${Math.trunc(pauseTime/60)} : ${(pauseTime % 60 < 10) ? `0${pauseTime % 60}` : pauseTime % 60 }`; 
            }
            else if (pause == false && initialTime === 0) {
                pauseTime--;
                DisplayP.innerText = `${Math.trunc(pauseTime/60)} : ${(pauseTime % 60 < 10) ? `0${pauseTime % 60}` : pauseTime % 60 }`;  
            }
            
        }, 1000 )

        btnReset.addEventListener("click", () => {
            clearInterval(timer);
            chekInterval = false;
            initialTime = timesInit;
            pauseTime = Ptime;
            DisplayT.innerText = `${Math.trunc(initialTime/60)} : ${(initialTime % 60 < 10) ? `0${initialTime % 60}` : initialTime % 60 }`; 
            DisplayP.innerText = `${Math.trunc(pauseTime/60)} : ${(pauseTime % 60 < 10) ? `0${pauseTime % 60}` : pauseTime % 60 }`; 
        })

    }
    else{ 
        return;
    }
})

btnPause.addEventListener('click', () => {
    if (pause === false) {
        btnPause.innerText = "Play";
    }else if (pause === true) {
        btnPause.innerText = "Pause";
    }
    pause = !pause;
} )
