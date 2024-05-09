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
ctx.lineTo(300, 150);
ctx.stroke();


function draw_circle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, 2 * Math.PI);
    ctx.stroke();
}




function kulka(x, y) {
    this.x = x
    this.y = y
}

let kulka1 = {
    x: Math.floor(Math.random() * 290) + 5,
    y: Math.floor(Math.random() * 140) + 5
}

let kulka2 = {
    x: Math.floor(Math.random() * 290) + 5,
    y: Math.floor(Math.random() * 140) + 5
}

let kulka3 = {
    x: Math.floor(Math.random() * 290) + 5,
    y: Math.floor(Math.random() * 140) + 5
}

draw_circle(kulka1.x, kulka1.y)
draw_circle(kulka2.x, kulka3.y)
draw_circle(kulka3.x, kulka3.y)