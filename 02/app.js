const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')

//const notes=['заметка 1','заметка 2','заметка 3','заметка 4'].map(el => el+' map сработал');

const notes=[{
        title: 'первая заметка',
        completed: true,
    },
    {
        title: 'вторая заметка',
        completed: false,
    }]


//отрисовывает сохраненный список
function render(){
    /*listElement.innerHTML 
    listElement.insertAdjacentHTML("beforeend",getNoteTemplate(notes[3]))
    listElement.insertAdjacentHTML("beforeend",getNoteTemplate(notes[0]))
    вариант 1*/
    listElement.innerHTML=''
    if(notes.length===0){
        listElement.innerHTML = "<p>Нет записей</p>"
    }
    for (let i = 0; i<notes.length; i++){
        listElement.insertAdjacentHTML("beforeend",getNoteTemplate(notes[i],i))
    }
    
    //вариант 2
    /*for (let note of notes){
        listElement.insertAdjacentHTML("beforeend",getNoteTemplate(note))
    }*/
}

render()
    
//добавляет элемент в конец списка
createBtn.onclick = ()=>{
    if(inputElement.value.length === 0){
        return
    }
    
    const newNote = {
        title:inputElement.value, 
        completed:false
    }
    notes.push(newNote)
    render()
    /*listElement.insertAdjacentHTML("beforeend",getNoteTemplate(newNote)),*/
    inputElement.value=""
}

listElement.onclick = function(event){
    const ind = parseInt(event.target.dataset.index)
    const type = event.target.dataset.type
    //console.log(typeof ind);
    if(type === 'toggle'){
        //console.log(notes[ind].completed)
        notes[ind].completed = !notes[ind].completed
    } else if(type === 'remove'){
        notes.splice(ind,1)
        //console.log('нажал удалить')
    }
    render()
}

//функция отрисосвывает и возвращает элемент списка
function getNoteTemplate(note,index){
    // console.log(note.title);
    // console.log(note.completed);
    return `
    <li
      class="list-group-item d-flex justify-content-between align-items-center">
        <span class="${ note.completed ? "text-decoration-line-through" : ""}">
            ${note.title}
        </span>
        <span>
          <span 
            class="btn btn-small btn-${ note.completed ? "warning" : "success" }"
            data-type="toggle"
            data-index="${index}"> &check; </span>
          <span 
            class="btn btn-small btn-danger"
            data-type="remove"
            data-index="${index}"> &times;</span>
        </span>
    </li>`
}

/*
    object theory
*/

/*const person = {
    firstName: 'Sasha',
    lastName: 'Lisov',
    yeat: 1992,
    man: true,
    lang: ['ru','eng'],
    getFullName: function(){
        return this.firstName+' '+this.lastName
    }
}
person.getFullName()*/