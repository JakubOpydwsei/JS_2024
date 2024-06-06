const c = document.querySelector("#canvas");
const ctx = c.getContext("2d");

ctx.moveTo(0, 0);
ctx.lineTo(384, 216);
ctx.stroke();


function draw_circle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, 2 * Math.PI);
    ctx.stroke();
}



function kulka(x, y, z, zx, zy) {
    this.x = x
    this.y = y
    this.z = z
    this.zx = zx
    this.zy = zy
}


let kulki = []

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ilość kulek

// dodać start i stop
//dodać pole od ilości kul
//numberOfCircles= 10



var startBtn = document.querySelector('#start').addEventListener('click',start)
var stopBtn = document.querySelector('#stop').addEventListener('click',stop)



function start() {
    var numberOfCircles = document.querySelector('#number').value
    for (let index = 0; index < numberOfCircles; index++) {
        kulki.push(
    
            new kulka(
                Math.floor(Math.random() * 374) + 5,
                Math.floor(Math.random() * 206) + 5,
                Math.floor(Math.random() * 2),
                1,
                1)
        )
    
        if (Math.floor(Math.random() * 4) > 2) {
            kulki[index].zx = Math.random() * -2
    
        }
        if (Math.floor(Math.random() * 4) > 2) {
            kulki[index].zy = Math.random() * -2
        }
    }
}


function stop() {
    kulki = []
}



// kulki.forEach(kula => {
//     if (Math.floor(Math.random() * 2) > 1) {
//         kula.zx = Math.random() * -2

//     }
//     if (Math.floor(Math.random() * 2) > 1) {
//         kula.zy = Math.random() * -2
//     }
// });


function draw() {
    ctx.clearRect(0, 0, 384, 216)

    kulki.kulki.forEach(kulka => {
        draw_circle(kulka.x, kulka.y)
    });

}





setInterval(() => {
    ctx.clearRect(0, 0, 384, 216)
    kulki.forEach(kulka => {
        if (kulka.x + (kulka.zx * kulka.z) >= 379 || kulka.x + (kulka.zx * kulka.z) <= 5) {
            kulka.zx = kulka.zx * -1;
        }

        if (kulka.y + (kulka.zy * kulka.z) >= 211 || kulka.y + (kulka.zy * kulka.z) <= 5) {
            kulka.zy = kulka.zy * -1;
        }


        kulka.x = kulka.x + (kulka.zx * kulka.z)
        kulka.y = kulka.y + (kulka.zy * kulka.z)
        kulka.z = kulka.z + 0.0005

        draw_circle(kulka.x, kulka.y)
    });
    for (let index = 0; index < kulki.length; index++) {
        for (let index2 = 0; index2 < kulki.length; index2++) {
            lineCheck(kulki[index], kulki[index2])

        }

    }
    //draw()



}, 10)



function lineCheck(first, second) {
    let x = first.x - second.x

    if (x < 0) {
        x = x * -1
    }

    let y = first.y - second.y

    if (y < 0) {
        y = y * -1
    }

    let c = (x * x) + (y * y)
    c = Math.sqrt(c)

    if (c < 100) {
        ctx.moveTo(first.x, first.y);
        ctx.lineTo(second.x, second.y);
        ctx.stroke();
    }

}



let counter = 0
let lastTime = Date.now()
function animate() {
    counter++
    if (counter % 100 === 0) {
        const time = Date.now()
        const interval = time - lastTime
        console.log(`Render 100 klatek trwał: ${interval} [${1000 / (interval / 100)}fps]`)
        lastTime = time
    }
    
    requestAnimationFrame(animate)
}

requestAnimationFrame(animate)


// około 34-36 kulek fps (58 - 82)