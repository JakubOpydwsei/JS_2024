let counter = 0
let lastTime = Date.now()
window.addEventListener('deviceorientation', onDeviceMove)

function onDeviceMove(event) {
    console.log(event)
}

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


// let gyroscope = new Gyroscope({ frequency: 60 });

// gyroscope.addEventListener("reading", (e) => {
//   console.log(`Angular velocity along the X-axis ${gyroscope.x}`);
//   console.log(`Angular velocity along the Y-axis ${gyroscope.y}`);
//   console.log(`Angular velocity along the Z-axis ${gyroscope.z}`);
// });
// gyroscope.start();

window.addEventListener('deviceorientation', handleOrientation);

function handleOrientation(event) {
  const alpha = event.alpha;
  const beta = event.beta;
  const gamma = event.gamma;
  console.log(alpha)
  console.log(beta)
  console.log(gamma)
  // Do stuff...
}

let btn = document.querySelector('button').addEventListener('click', () => {
    const alphat = window.alpha;
  const betat = window.beta;
  const gammat = window.gamma;
  console.log(alphat)
  console.log(betat)
  console.log(gammat)
})

/// use local id w live server