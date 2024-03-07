//tworenie img w js-ie

//polecenie: 
//https://github.com/rbrzegowy/Programowanie-w-Javascript---stacjonarni-2024/tree/main/Lab%202%20-%20slider


const img1 = new Image(100,100)
const img2 = new Image()
const img3 = new Image()
const img4 = new Image()
const img5 = new Image()
const img6 = new Image()

img1.src="https://picsum.photos/100"
img2.src="https://picsum.photos/100"
img3.src="https://picsum.photos/100"
img4.src="https://picsum.photos/100"
img5.src="https://picsum.photos/100"
img6.src="https://picsum.photos/100"

const package = document.querySelector('.slider')
package.appendChild(img1)
package.appendChild(img2)
package.appendChild(img3)
package.appendChild(img4)
package.appendChild(img5)
package.appendChild(img6)

// pobranie przycisków 
const zdj1 = document.querySelector('zdj1')
const zdj2 = document.querySelector('zdj2')
const zdj3 = document.querySelector('zdj3')
const zdj4 = document.querySelector('zdj4')
const zdj5 = document.querySelector('zdj5')
const zdj6 = document.querySelector('zdj6')




// zdj1.addEventListener(onclick, ******)
// zdj2.addEventListener(onclick, ******)
// zdj3.addEventListener(onclick, ******)
// zdj4.addEventListener(onclick, ******)
// zdj5.addEventListener(onclick, ******)
// zdj6.addEventListener(onclick, ******)



// setTimeout(), setInterval()
// setTimeout(
//     ()=>{
//         console.log('out')
//         const box = document.querySelector('#slider-inner')
//         box.style.transform = 'translate(200px ,0px)'
//     }
// ,2_000)

let positionX = 0
let opacity = 1
const anim = setInterval(
    ()=>{
        const box = document.querySelector('#slider-inner')
        box.style.transform = 'translate( -' +  positionX + 'px ,0px)'
        box.style.opacity = opacity
        positionX++
        opacity = opacity -0.005
    }
,16)


setTimeout( ()=> {
    clearInterval(anim)
},6_000)


