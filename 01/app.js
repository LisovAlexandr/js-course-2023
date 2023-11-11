const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')

let action = '+'

plusBtn.onclick = ()=>{
    plusBtn.style="background-color: red"
    action='+'
}
minusBtn.onclick = ()=>{
    minusBtn.style="background-color: blue"
    action='-'
}
function printRes(){
    if(sum<0){
        resultElement.style.backgroundColor = "red"
    }else{
        resultElement.style.backgroundColor = "green"
    }
}
submitBtn.onclick = () => {
    if(action === '+'){
        const sum = Number(input1.value) + Number(input2.value)
        resultElement.textContent = sum
    } else {
        const sum = Number(input1.value) - Number(input2.value)
        resultElement.textContent = sum
    }
}


