// const img0 = new Image()
// const img1 = new Image()
// const img2 = new Image()
// const img3 = new Image()
// const img4 = new Image()
// const img5 = new Image()

// img0.src="https://picsum.photos/id/12/200"
// img1.src="https://picsum.photos/id/13/200"
// img2.src="https://picsum.photos/id/14/200"
// img3.src="https://picsum.photos/id/15/200"
// img4.src="https://picsum.photos/id/16/200"
// img5.src="https://picsum.photos/id/17/200"

// const package = document.querySelector('.slider')

// // pobranie przycisków 
// const zdj0 = document.querySelector('zdj1')
// const zdj1 = document.querySelector('zdj2')
// const zdj2 = document.querySelector('zdj3')
// const zdj3 = document.querySelector('zdj4')
// const zdj4 = document.querySelector('zdj5')
// const zdj5 = document.querySelector('zdj6')

// let positionX = 0
// function next_slide(which){
// //let opacity = 1

//  const anim = setInterval(
//      ()=>{
//         const images = document.querySelectorAll('img')

//         //images[which].style.opacity = opacity    
//         //opacity = opacity -0.025
//         positionX = positionX + 5

//         // images[which].style.transform = 'translate( -' + positionX + 'px ,0px)'
//         // images[which + 1].style.transform = 'translate( -' + positionX + 'px ,0px)'
//         // images[which + 2].style.transform = 'translate( -' + positionX + 'px ,0px)'
//         // //images[which + 3].style.opacity = 1
//         // images[which + 3].style.transform = 'translate( -' + positionX + 'px ,0px)'
//         // images[which + 4].style.transform = 'translate( -' + positionX + 'px ,0px)'
//         // images[which + 5].style.transform = 'translate( -' + positionX + 'px ,0px)'
//         box.style.transform = 'translate( -' + positionX + 'px ,0px)'
//         },16)

// setTimeout( ()=> {
//     clearInterval(anim)
// },760)
// }

// function reset_slide(){
//     const anim = setInterval(
//         ()=>{
//             positionX = positionX - 30
//             box.style.transform = 'translate( -' + positionX + 'px ,0px)'
//         },16)
// }

// function start_slide(){


//     setInterval( ()=> {
//         next_slide(0)
//     },2_000)

//     setTimeout( ()=> {
//         reset_slide()
//     },12_000)    

// }

// start_slide()


// const box = document.querySelector('.box')



// box.appendChild(img0)
// box.appendChild(img1)
// box.appendChild(img2)
// box.appendChild(img3)
// box.appendChild(img4)
// box.appendChild(img5)

// ///////////// próba wykonania animacji w JS


const img0 = new Image()
const img1 = new Image()
const img2 = new Image()
const img3 = new Image()
const img4 = new Image()
const img5 = new Image()

img0.src = "https://picsum.photos/id/12/200"
img1.src = "https://picsum.photos/id/13/200"
img2.src = "https://picsum.photos/id/14/200"
img3.src = "https://picsum.photos/id/15/200"
img4.src = "https://picsum.photos/id/16/200"
img5.src = "https://picsum.photos/id/17/200"

const box = document.querySelector('.box')
const nextBtn = document.getElementById('next')
const backBtn = document.getElementById('back')
const btns = []
btns.push(document.querySelector('#zdj0'))
btns.push(document.querySelector('#zdj1'))
btns.push(document.querySelector('#zdj2'))
btns.push(document.querySelector('#zdj3'))
btns.push(document.querySelector('#zdj4'))
btns.push(document.querySelector('#zdj5'))


btns[0].addEventListener('click', () => {
    goToSlide(0)
})
btns[1].addEventListener('click', () => {
    goToSlide(1)
})
btns[2].addEventListener('click', () => {
    goToSlide(2)
})
btns[3].addEventListener('click', () => {
    goToSlide(3)
})
btns[4].addEventListener('click', () => {
    goToSlide(4)
})
btns[5].addEventListener('click', () => {
    goToSlide(5)
})

let obecne_zdjecie = 0

nextBtn.addEventListener('click', kolejne_zdj)
backBtn.addEventListener('click', poprzednie_zdj)

box.appendChild(img0)
box.appendChild(img1)
box.appendChild(img2)
box.appendChild(img3)
box.appendChild(img4)
box.appendChild(img5)

setInterval(kolejne_zdj, 3000)

przesun_zdj(obecne_zdjecie)


function przesun_zdj(position) {
    box.style.transform = `translateX(${-position * 240}px)`
}

function kolejne_zdj() {
    obecne_zdjecie = (obecne_zdjecie + 1) % 6
    przesun_zdj(obecne_zdjecie)
}

function poprzednie_zdj() {
    obecne_zdjecie = (obecne_zdjecie + 5) % 6
    przesun_zdj(obecne_zdjecie)
}

function goToSlide(index) {
    obecne_zdjecie = index
    przesun_zdj(obecne_zdjecie)
}