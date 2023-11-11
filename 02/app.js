const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')

//const notes=['заметка 1','заметка 2','заметка 3','заметка 4'].map(el => el+' map сработал');

const notes=[{
        title: 'первая заметка',
        completed: false,
    },
    {
        title: 'вторая заметка',
        completed: true,
    }]

//отрисовывает сохраненный список
function render(){
    // listElement.innerHTML 
    // listElement.insertAdjacentHTML("beforeend",getNoteTemplate(notes[3]))
    // listElement.insertAdjacentHTML("beforeend",getNoteTemplate(notes[0]))
    //вариант 1
    /*for (let i = 0; i<notes.length; i++){
        listElement.insertAdjacentHTML("beforeend",getNoteTemplate(notes[i]))
    }*/
    //вариант 2
    for (let note of notes){
        listElement.insertAdjacentHTML("beforeend",getNoteTemplate(note.title))
    }
}

render()
    
//добавляет элемент в конец списка
createBtn.onclick = ()=>{
    if(inputElement.value.length === 0){
        return
    }
    listElement.insertAdjacentHTML("beforeend",getNoteTemplate(inputElement.value))
    inputElement.value=""
}

//функция отрисосвывает и возвращает элемент списка
function getNoteTemplate(title){
    return `<li
        class="list-group-item d-flex justify-content-between align-items-center">
        <span>${title}</span>
        <span>
        <span class="btn btn-small btn-success">&check;</span>
        <span class="btn btn-small btn-danger">&times;</span>
        </span>
        </li>`
}

/*
    object theory
*/

const person = {
    firstName: 'Sasha',
    lastName: 'Lisov',
    yeat: 1992,
    man: true,
    lang: ['ru','eng'],
    getFullName: function(){
        return this.firstName+' '+this.lastName
    }
}
person.getFullName()