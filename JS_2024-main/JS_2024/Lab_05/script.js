

const asyncAdd = async (a,b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
      return Promise.reject('Argumenty muszą mieć typ number!')
    }
    return new Promise((resolve, reject) => {
      setTimeout(() =>{
        resolve(a+b)
      }, 100)
    })
  }

  const tab = []

  for (let index = 0; index < 100; index++) {
    tab.push(index)
    
  }

//  let sum=0
//   add(tab)
//  async function add(tab){
//     performance.mark('start')
//     for(let number of tab){
//         sum = await asyncAdd(sum,number)
//     }    
//     console.log(sum)
//     performance.mark('koniec')
//     return sum
//  }


add(tab)
async function add(tab) {

    Promise.all( await asyncAdd(,))
}


setTimeout(() => {
    console.log("Czas:")
    console.log(performance.measure('czas','start','koniec'))
}, 13000);

