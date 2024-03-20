
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

addEventListener('keydown', (ev) => {
    const key = ev.key
    const sound = sounds[key]
    sound.currentTime = 0
    sound.play()

})

document.querySelector('#t1').addEventListener('click', function () { record(1) })
document.querySelector('#t2').addEventListener('click', function () { record(2) })
document.querySelector('#t3').addEventListener('click', function () { record(3) })
document.querySelector('#t4').addEventListener('click', function () { record(4) })

document.querySelector('#p1').addEventListener('click', function () { play_record(1) })
document.querySelector('#p2').addEventListener('click', function () { play_record(2) })
document.querySelector('#p3').addEventListener('click', function () { play_record(3) })
document.querySelector('#p4').addEventListener('click', function () { play_record(4) })


let time1 = []
let keys1 = []

let time2 = []
let keys2 = []

let time3 = []
let keys3 = []

let time4 = []
let keys4 = []

function record(track) {

    let start = Date.now()
    console.log(track)
    console.log(typeof (track))

    switch (track) {
        case 1:
            addEventListener('keydown', (ev) => {
                if ((start - Date.now()) * -1 < 3000) {
                    let timediff = start - Date.now()
                    time1.push(timediff * (-1))
                    keys1.push(ev.key)
                }
            })
            break;
        case 2:
            addEventListener('keydown', (ev) => {
                if ((start - Date.now()) * -1 < 3000) {
                    let timediff = start - Date.now()
                    time2.push(timediff * (-1))
                    keys2.push(ev.key)
                }
            })
            break;
        case 3:
            addEventListener('keydown', (ev) => {
                if ((start - Date.now()) * -1 < 3000) {
                    let timediff = start - Date.now()
                    time3.push(timediff * (-1))
                    keys3.push(ev.key)
                }
            })
            break;
        case 4:
            addEventListener('keydown', (ev) => {
                if ((start - Date.now()) * -1 < 3000) {
                    let timediff = start - Date.now()
                    time4.push(timediff * (-1))
                    keys4.push(ev.key)
                }
            })
            break;

        default:
            break;
    }

}

function play_record(track) {



    switch (track) {
        case 1:
            for (let index = 0; index < time1.length; index++) {

                setTimeout(() => {
                    const sound = sounds[keys1[index]]
                    sound.currentTime = 0
                    sound.play()
                }, time1[index])

            }
            break;
        case 2:
            for (let index = 0; index < time2.length; index++) {

                setTimeout(() => {
                    const sound = sounds[keys2[index]]
                    sound.currentTime = 0
                    sound.play()
                }, time2[index])

            }
            break;
        case 3:
            for (let index = 0; index < time3.length; index++) {

                setTimeout(() => {
                    const sound = sounds[keys3[index]]
                    sound.currentTime = 0
                    sound.play()
                }, time3[index])

            }
            break;
        case 4:
            for (let index = 0; index < time4.length; index++) {

                setTimeout(() => {
                    const sound = sounds[keys4[index]]
                    sound.currentTime = 0
                    sound.play()
                }, time4[index])

            }
            break;

        default:
            break;
    }
}
