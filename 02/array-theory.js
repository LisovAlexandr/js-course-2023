const names = ['Саша','Паша','Юля','Даша']
console.log('исходный массив \n',names);

// names.push('Алена')
// const ret = names.shift()

// console.log('Names: ',names);
// console.log('Return ', ret);
//---------------
// console.log('original ',names);
// const returned = names.toReversed()

// names.reverse()  // мутирует исходный массив
// console.log('after ',names);
// console.log('returned', returned);
//----------------

//names.sort() //мутирует исходный массив
//console.log(names);

// const sortedArr = names.toSorted()
// console.log(names);
// console.log(sortedArr);
//----------------
//  const coolMan = names.indexOf('Саша')
//  console.log(coolMan);
//  names[coolMan] = 'Санек' // изменяем исходный массив
//  console.log(names);
//----------------

// const coolWoMan = names.indexOf('Даша')
// const newNames = names.with(coolWoMan,'ДАША')
// console.log(names);
// console.log(newNames);
//----------------

// const upperArr = names.map((el) => {return el.toUpperCase()})
// console.log(upperArr);
// console.log('исходный массив \n',names);

//-----аналог with-----

// const newArr = names.map((elem,index)=>{
//     if(elem==='Саша'){
//         return 'это Санек'
//     }
//     return elem
// })
// console.log(newArr);

// //---------------
// console.log(names.includes('Саша'));
// //--------аналог на indexOf
// console.log(names.indexOf('Саша') !== -1);
//---------------

const people = [
    {
        name: 'Гриша',
        budget: 50000
    },
    {
        name: 'Игорь',
        budget: 4500
    },
    {
        name: 'Ксения',
        budget: 42
    }
]

//console.log(people.includes());

// let findPerson

// for(let person of people){
//     if(person.budget === 4500){
//         findPerson=person
//     }
// }

// console.log(findPerson);
//------аналог на find
// const findPerson2 = people.find((person)=>{
//     // if(person.budget===42){ 
//     //     return true  //здесь вернуть булево значение
//     // }
//     //---сокращаем код
//     return person.budget===4500
// })
// console.log(findPerson2);
//----аналог еще более короткий
// const finded = people.find((p)=>p.budget===50000)
// console.log(finded);
//-----------------------
// const filtered = people.filter((person)=>person.budget>4000) //возвращает новый массив
// console.log(filtered);
//---------задача сложить суммы более 4000
// const sumBudget = people
//     .filter((p)=>p.budget>4000)//отфильтровали богачей
//     .map((p)=>p.budget)//преобразует массив, возвращая только budget
//     .reduce((acc,p)=>acc+p,0)//аккумулирует, acc изменяется каждую итерацию, 0 начальное значение
// console.log(sumBudget);
// console.log(people);
//----можем преобразоавть код выше для читабельности

// const byBudget = (p)=>p.budget>4000
// const pickBudget = (p)=>p.budget

// const sumBudget = people
//     .filter(byBudget)//отфильтровали богачей
//     .map(pickBudget)//преобразует массив, возвращая только budget
//     .reduce((acc,p)=>acc+p,0)//аккумулирует, acc изменяется каждую итерацию, 0 начальное значение
// console.log(sumBudget);
//----------------
const str = 'Привет как дела'
const reversed = str.split('').toReversed().join('')
console.log(reversed);
