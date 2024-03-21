// const teraz = new Date()
// const timestampZWczoraj = Date.now()
// Date.now() // timestamp
// const wczoraj = new Date('2024-03-20')
// const wczoraj = new Date(timestampZWczoraj)

// wczoraj.toLocaleDateString()
// wczoraj.toLocaleString()
// wczoraj.toLocaleTimeString()
// wczoraj.toISOString()

//localStorage.setItem('klucz','tu musi być string')
//localStorage.getItem('klucz')
//localStorage.clear()
//localStorage.removeItem('klucz')
//JSON.stringify(obiekt)

// Tytuł
// Treść
// Kolor notatki
// Pin (boolean) - możliwość przypięcia do góry na liście notatek
// Datę utworzenia

// localStorage.setItem('note1_title','first note')
// localStorage.setItem('note1_content','<ul><li>1</li> <li>2</li> <li>3</li> <li>4</li></ul>')
// localStorage.setItem('note1_colour','first note')
// localStorage.setItem('note1_ispin','first note')
// localStorage.setItem('note1_date','first note')

//document.querySelector('body').innerHTML = localStorage.getItem('note1_content')

const butonAdd = document.querySelector('#buttonAdd')

//butonAdd.addEventListener('click',addNote)
//let numbers

function addNote() {
   const title = document.querySelector('#title').value
   const content = document.querySelector('#content').value
   const colour = document.querySelector('#colour').value
   const pin = document.querySelector('#pin').checked

localStorage.setItem('note' + numbersOfNotes +'_title',JSON.stringify(title))
localStorage.setItem('note' + numbersOfNotes +'_content',JSON.stringify(content))
localStorage.setItem('note' + numbersOfNotes +'_colour',JSON.stringify(colour))
localStorage.setItem('note' + numbersOfNotes +'_ispin',JSON.stringify(pin))
localStorage.setItem('note' + numbersOfNotes +'_date',JSON.stringify(new Date().toISOString()))

//localStorage.setItem('numbersOfNotes','1')
}

// for (let index = 0; index < numbersOfNotes; index++) {
//     document.querySelector('#container').innerHTML = ' Treść notatki' + localStorage.getItem('note' + index +'_title')
//     document.querySelector('#container').innerHTML = ' Treść notatki' + localStorage.getItem('note' + index +'_content')
//     document.querySelector('#container').innerHTML = ' Treść notatki' + localStorage.getItem('note' + index +'_colour')
//     document.querySelector('#container').innerHTML = ' Treść notatki' + localStorage.getItem('note' + index +'_ispin')
//     document.querySelector('#container').innerHTML = ' Treść notatki' + localStorage.getItem('note' + index +'_date')

// }

