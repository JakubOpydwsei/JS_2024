document.addEventListener('DOMContentLoaded', ()=>{
    let counter = 0;
let lastTime = Date.now();

window.addEventListener('deviceorientation', onDeviceMove);


let target = document.createElement('div');
target.id = 'target';
target.style.position = 'absolute';

target.style.backgroundColor = 'red';
target.style.width = '20px';
target.style.height = '20px';

document.body.appendChild(target);


let score = 0;
let playerName = prompt("Enter your name:");
let czas = 60

let box = document.querySelector('#box');
let szerokosc = 0;
let wysokosc = 0;
let x = 0;
let y = 0;

let lewaId = null;
let prawaId = null;
let goraId = null;
let dolId = null;



function nowyCel() {
    const x = Math.floor(Math.random() * (window.innerWidth - 100));
    const y = Math.floor(Math.random() * (window.innerHeight - 100));
    target.style.left = x + 'px';
    target.style.top = y + 'px';
}

function startGame() {
    // score = 0;
    // szerokosc = 0;
    // wysokosc = 0;
    nowyCel();
    const intervalId = setInterval(() => {
        czas--;
        if (czas <= 0) {
            clearInterval(intervalId);
            koniec();
        }
    }, 1000);
}



function koniec() {
    alert('Gra skończona! Twój wynik:' + score);
    localStorage.setItem(playerName, score);
}





console.log('test')////////////////////////////////////////////////////






function onDeviceMove(event) {
    console.log(event);

    if (event.alpha > 270 && event.alpha < 360) {
        x = 1;
    } else if (event.alpha > 0 && event.alpha < 90) {
        x = -1;
    } else {
        x = 0;
    }

    if (event.beta > 90) {
        y = 1;
    } else if (event.beta < 90) {
        y = -1;
    } else {
        y = 0;
    }

    switch (x) {
        case 0:
            if (lewaId) {
                cancelAnimationFrame(lewaId);
                lewaId = null;
            }
            if (prawaId) {
                cancelAnimationFrame(prawaId);
                prawaId = null;
            }
            break;
        case 1:
            if (!lewaId) {
                lewaId = requestAnimationFrame(lewa);
            }
            if (prawaId) {
                cancelAnimationFrame(prawaId);
                prawaId = null;
            }
            break;
        case -1:
            if (!prawaId) {
                prawaId = requestAnimationFrame(prawa);
            }
            if (lewaId) {
                cancelAnimationFrame(lewaId);
                lewaId = null;
            }
            break;
    }

    switch (y) {
        case 0:
            if (goraId) {
                cancelAnimationFrame(goraId);
                goraId = null;
            }
            if (dolId) {
                cancelAnimationFrame(dolId);
                dolId = null;
            }
            break;
        case 1:
            if (!goraId) {
                goraId = requestAnimationFrame(gora);
            }
            if (dolId) {
                cancelAnimationFrame(dolId);
                dolId = null;
            }
            break;
        case -1:
            if (!dolId) {
                dolId = requestAnimationFrame(dol);
            }
            if (goraId) {
                cancelAnimationFrame(goraId);
                goraId = null;
            }
            break;
    }
}

function lewa() {
    szerokosc++;
    box.style.transform = 'translate(' + szerokosc + 'px, ' + wysokosc + 'px)';
    lewaId = requestAnimationFrame(lewa);
    checkCollision();
}

function prawa() {
    szerokosc--;
    box.style.transform = 'translate(' + szerokosc + 'px, ' + wysokosc + 'px)';
    prawaId = requestAnimationFrame(prawa);
    checkCollision();
}

function gora() {
    wysokosc++;
    box.style.transform = 'translate(' + szerokosc + 'px, ' + wysokosc + 'px)';
    goraId = requestAnimationFrame(gora);
    checkCollision();
}

function dol() {
    wysokosc--;
    box.style.transform = 'translate(' + szerokosc + 'px, ' + wysokosc + 'px)';
    dolId = requestAnimationFrame(dol);
    checkCollision();
}

function checkCollision() {
    const boxLeft = szerokosc;
    const boxTop = wysokosc;
    const targetLeft = parseInt(target.style.left, 10);
    const targetTop = parseInt(target.style.top, 10);

    // do poprawki kolizja
    if (
        boxLeft < targetLeft + 50 &&
        boxLeft + 50 > targetLeft &&
        boxTop < targetTop + 50 &&
        boxTop + 50 > targetTop
    ) {
        score++;
        nowyCel();
    }
}

startGame();


})