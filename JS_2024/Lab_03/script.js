
const sounds = {
    'q': document.querySelector('#s1'),
    'w': document.querySelector('#s2'),
    'e': document.querySelector('#s3'),
    'r': document.querySelector('#s4'),
    'u': document.querySelector('#s5'),
    'i': document.querySelector('#s6'),
    'o': document.querySelector('#s7'),
    'p': document.querySelector('#s8'),
    ' ': document.querySelector('#s9')
}

addEventListener('keydown', (ev)=>{

    const key = ev.key
    const sound = sounds[key]
    sound.currentTime = 0
    sound.play()

})
document.querySelector('#t1').addEventListener('click',record(1))
document.querySelector('#t2').addEventListener('click',record(2))
document.querySelector('#t3').addEventListener('click',record(3))
document.querySelector('#t4').addEventListener('click',record(4))


function record(number) {
    const start = Date.now()
}