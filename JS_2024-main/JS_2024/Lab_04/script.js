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

localStorage.setItem('note1_title','Notatka startowa ')
localStorage.setItem('note1_content','Tutaj możesz umieścić swoje notatki')
localStorage.setItem('note1_colour','green')
localStorage.setItem('note1_ispin','false')
let texdate = JSON.stringify(new Date().toLocaleDateString())
localStorage.setItem('note1_date', texdate.slice(1, texdate.length -1))
let notes = []







let deleteBtns =document.querySelectorAll('.delete')
notesGenerate()




function deleteNote(btn) {

   let index = btn.target.id.slice(btn.target.id.length -1)

         localStorage.removeItem('note' + index + '_title')
         localStorage.removeItem('note' + index + '_content')
         localStorage.removeItem('note' + index + '_colour')
         localStorage.removeItem('note' + index + '_ispin')
         localStorage.removeItem('note' + index + '_date')

         console.log(btn.target.id)

         notesGenerate()
}


function notesGenerate() {
   document.querySelector('#container').innerHTML = ''
   notes = []
   notes_prio = []
   notes_nonprio = []

   for (let index = 0; index < 50; index++) {

      if (localStorage.getItem('note' + index + '_ispin') == 'true') {
         notes.push(index)
         notes_prio.push(index)
      }
      if (localStorage.getItem('note' + index + '_ispin') == 'false') {
         notes.push(index)
         notes_nonprio.push(index)
      }
         // const noteContainer = document.createElement("div") 
         // const editBtn = document.createElement("button") 
         // editBtn.innerHTML = 'Edytuj'
         // editBtn.id = 'editBtn_' + index
         // const deleteBtn  = document.createElement("button") 
         // deleteBtn.innerHTML = 'Usuń'
         // deleteBtn.id = 'deleteBtn_' + index
         // deleteBtn.classList.add('delete')

         // const note = localStorage.getItem('note' + index + '_title') + " " +
         //    localStorage.getItem('note' + index + '_date') +
         //    '<br>' + localStorage.getItem('note' + index + '_content')

         // noteContainer.innerHTML += note
         // const colour = localStorage.getItem('note' + index + '_colour')
         // //colour = colour.slice(1, colour.length -1)
         // noteContainer.style.background = colour
         // const ids = 'note_' + index
         // noteContainer.id = ids
         // document.querySelector('#container').appendChild(noteContainer)

         // document.querySelector('#' + ids).appendChild(editBtn)
         // document.querySelector('#' + ids).appendChild(deleteBtn)

         
         // deleteBtns = document.querySelectorAll('.delete')

         // deleteBtns.forEach(element => {
         //    element.addEventListener('click', deleteNote)
         // });
      

   }

   notes_prio.forEach(index => {
         const noteContainer = document.createElement("div") 
         const editBtn = document.createElement("button") 
         editBtn.innerHTML = 'Edytuj'
         editBtn.id = 'editBtn_' + index
         const deleteBtn  = document.createElement("button") 
         deleteBtn.innerHTML = 'Usuń'
         deleteBtn.id = 'deleteBtn_' + index
         deleteBtn.classList.add('delete')

         const note = localStorage.getItem('note' + index + '_title') + " " +
            localStorage.getItem('note' + index + '_date') +
            '<br>' + localStorage.getItem('note' + index + '_content')

         noteContainer.innerHTML += note
         const colour = localStorage.getItem('note' + index + '_colour')
         //colour = colour.slice(1, colour.length -1)
         noteContainer.style.background = colour
         const ids = 'note_' + index
         noteContainer.id = ids
         document.querySelector('#container').appendChild(noteContainer)

         document.querySelector('#' + ids).appendChild(editBtn)
         document.querySelector('#' + ids).appendChild(deleteBtn)

         
         deleteBtns = document.querySelectorAll('.delete')

         deleteBtns.forEach(element => {
            element.addEventListener('click', deleteNote)
         });
   });

   notes_nonprio.forEach(index => {
      const noteContainer = document.createElement("div") 
         const editBtn = document.createElement("button") 
         editBtn.innerHTML = 'Edytuj'
         editBtn.id = 'editBtn_' + index
         const deleteBtn  = document.createElement("button") 
         deleteBtn.innerHTML = 'Usuń'
         deleteBtn.id = 'deleteBtn_' + index
         deleteBtn.classList.add('delete')

         const note = localStorage.getItem('note' + index + '_title') + " " +
            localStorage.getItem('note' + index + '_date') +
            '<br>' + localStorage.getItem('note' + index + '_content')

         noteContainer.innerHTML += note
         const colour = localStorage.getItem('note' + index + '_colour')
         //colour = colour.slice(1, colour.length -1)
         noteContainer.style.background = colour
         const ids = 'note_' + index
         noteContainer.id = ids
         document.querySelector('#container').appendChild(noteContainer)

         document.querySelector('#' + ids).appendChild(editBtn)
         document.querySelector('#' + ids).appendChild(deleteBtn)

         
         deleteBtns = document.querySelectorAll('.delete')

         deleteBtns.forEach(element => {
            element.addEventListener('click', deleteNote)
         });
   });

}





//document.querySelector('body').innerHTML = localStorage.getItem('note1_content')

const butonAdd = document.querySelector('#buttonAdd')

butonAdd.addEventListener('click', addNote)

function addNote() {
   const title = document.querySelector('#title').value
   const content = document.querySelector('#content').value
   const colour = document.querySelector('#colour').value
   const pin = document.querySelector('#pin').checked

   let numbersOfNotes = 0

   for (let index = 1; index <= notes.length + 1; index++) {

      if (localStorage.getItem('note' + index + '_title') == null) {
         numbersOfNotes = index

         const texttitle = JSON.stringify(title)
         localStorage.setItem('note' + numbersOfNotes + '_title', texttitle.slice(1, texttitle.length -1))

         const textcontent= JSON.stringify(content)
         localStorage.setItem('note' + numbersOfNotes + '_content', textcontent.slice(1, textcontent.length -1))

         const textcolour= JSON.stringify(colour)
         localStorage.setItem('note' + numbersOfNotes + '_colour', textcolour.slice(1, textcolour.length -1))
         
         localStorage.setItem('note' + numbersOfNotes + '_ispin', JSON.stringify(pin))

         const texdate = JSON.stringify(new Date().toLocaleDateString())
         localStorage.setItem('note' + numbersOfNotes + '_date', texdate.slice(1, texdate.length -1))

         break;   
      }

   }
   notesGenerate()

   //localStorage.setItem('numbersOfNotes','1')
}

// for (let index = 0; index < numbersOfNotes; index++) {
//     document.querySelector('#container').innerHTML = ' Treść notatki' + localStorage.getItem('note' + index +'_title')
//     document.querySelector('#container').innerHTML = ' Treść notatki' + localStorage.getItem('note' + index +'_content')
//     document.querySelector('#container').innerHTML = ' Treść notatki' + localStorage.getItem('note' + index +'_colour')
//     document.querySelector('#container').innerHTML = ' Treść notatki' + localStorage.getItem('note' + index +'_ispin')
//     document.querySelector('#container').innerHTML = ' Treść notatki' + localStorage.getItem('note' + index +'_date')

// }



// numbersfNote=1
// let note = localStorage.getItem('note' + numbersfNote +'_title') + " " + localStorage.getItem('note' + numbersfNote +'_date') +
//  '<br>' + localStorage.getItem('note' + numbersfNote +'_content')
// document.querySelector('#container').innerHTML = note

