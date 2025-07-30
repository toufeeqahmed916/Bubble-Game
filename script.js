let pbtm = document.querySelector("#pbtm");
let time = document.querySelector("#time");
let hit = document.querySelector("#hitval");
let scoreupd = document.querySelector("#scoreval");

let score=0;
let rnhit;


makeBubble =()=>{
let clutter = "";
for(let i = 1; i<=168; i++){
    let rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
}
pbtm.innerHTML = clutter;
}

setTimer=()=>{
    let timer = 60;
    let interval = setInterval(()=>{
        if(timer>=0){
            time.innerText = timer--;
        }else{
            clearInterval(interval);
            pbtm.innerHTML = `<h1>Game Over</h1> <button id="repbtn">Replay</button>`;
            replayGame();
        }

    }, 1000)
}

getNewHit =()=>{
    rnhit = Math.floor(Math.random()*10);
    hit.innerText = rnhit;
}

increaseScore =()=>{
    score+=10
    scoreupd.innerText = score;
}

runGame =()=>{
    pbtm.addEventListener("click", (dets)=>{
        makeBubble();
        let find = Number(dets.target.innerText);
        if(find === rnhit){
            increaseScore();
            makeBubble();
            getNewHit();
        }
    })
}

replayGame=()=>{
    let btn = document.querySelector("#repbtn");
    btn.addEventListener("click", ()=>{
        makeBubble();
        getNewHit();
        setTimer();
        score = 0;
        scoreupd.innerText = score;
    })
}

makeBubble();
setTimer();
getNewHit();
runGame();