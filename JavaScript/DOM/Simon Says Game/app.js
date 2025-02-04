let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let btns = ["red", "green", "yellow", "purple"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game started");
        started = true;

        levelUp();
    }
});

function buttonFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 1000);
}

function levelUp(){
    level++;

    h2.innerText = `Lavel ${level}`;

    let randomNum = Math.floor(Math.random() * 3);
    let randomColor = btns[randomNum];
    let randomBtn = document.querySelector(`.${randomColor}`);
    console.log(randomNum);
    console.log(randomColor);
    console.log(randomBtn);
    buttonFlash(randomBtn);
}