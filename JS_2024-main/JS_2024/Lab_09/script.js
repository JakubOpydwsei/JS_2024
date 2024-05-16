const c = document.querySelector("#canvas");
const ctx = c.getContext("2d");

// 300 x 150 ( +/- 5 dla kulki od ściany )

// function draw_circle() {
//     const x = Math.floor(Math.random() * 290);
//     const y = Math.floor(Math.random() * 140);

//     ctx.beginPath();
//     ctx.arc(x + 5, y + 5, 3, 0, 2 * Math.PI);
//     ctx.stroke();
// }

//ctx.beginPath()
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

let kulka1 = {
    x: Math.floor(Math.random() * 374) + 5,
    y: Math.floor(Math.random() * 206) + 5,
    z: Math.floor(Math.random() * 3),
    zx: 1,
    zy: 1
    
}

let kulka2 = {
    x: Math.floor(Math.random() * 374) + 5,
    y: Math.floor(Math.random() * 206) + 5,
    z: Math.floor(Math.random() * 3),
    zx: 1,
    zy: 1
}

let kulka3 = {
    x: Math.floor(Math.random() * 374) + 5,
    y: Math.floor(Math.random() * 206) + 5,
    z: Math.floor(Math.random() * 3),
    zx: 1,
    zy: 1
}
{

    if(Math.floor(Math.random() * 2) > 1){
        kulka1.zx = Math.random() * -2
    }
    if(Math.floor(Math.random() * 2) > 1){
        kulka1.zy = Math.random() * -2
    }
    if(Math.floor(Math.random() * 2) > 1){
        kulka2.zx = Math.random() * -2
    }
    if(Math.floor(Math.random() * 2) > 1){
        kulka2.zy = Math.random() * -2
    }
    if(Math.floor(Math.random() * 2) > 1){
        kulka3.zx = Math.random() * -2
    }
    if(Math.floor(Math.random() * 2) > 1){
        kulka3.zy = Math.random() * -2
    }

}

let kulki = [kulka1,kulka2,kulka3]





function draw() {
    ctx.clearRect(0, 0,384,216)

    draw_circle(kulka1.x, kulka1.y)
    draw_circle(kulka2.x, kulka3.y)
    draw_circle(kulka3.x, kulka3.y)

}





setInterval( () => {
    ctx.clearRect(0, 0,384,216)
    kulki.forEach(kulka => {
        if (kulka.x +(kulka.zx * kulka.z) >= 379 || kulka.x + (kulka.zx * kulka.z) <= 5) {
            kulka.zx = kulka.zx * -1;
        }
    
        if (kulka.y + (kulka.zy * kulka.z) >= 211 || kulka.y +(kulka.zy * kulka.z) <= 5) {
            kulka.zy = kulka.zy * -1;
        }


        kulka.x = kulka.x + (kulka.zx * kulka.z)
        kulka.y = kulka.y + (kulka.zy * kulka.z)
        kulka.z = kulka.z + 0.001

        draw_circle(kulka.x , kulka.y)
    });
    
    lineCheck(kulka1,kulka2)
    lineCheck(kulka1,kulka3)
    lineCheck(kulka2,kulka3)
    //draw()
    


} , 10)



function lineCheck(first , second) {
    

    let x = first.x - second.x

    if (x < 0){
        x = x * -1
    }

    let y = first.y - second.y

    if (y < 0){
        y = y * -1
    }

    let c = (x*x)+(y*y)
    c = Math.sqrt(c)

    //console.log(c)


    if(c < 100){


        ctx.moveTo(first.x, first.y);
        ctx.lineTo(second.x,second.y);
        ctx.stroke();


    }

}

