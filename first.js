const btn2 = document.querySelector('#btn2')
const demo = document.querySelector('#demo')
const demo_2 = document.querySelector('#demo-2')
// const hide = document.querySelector('#hide')    
const url = ('https://jsonplaceholder.typicode.com/todos/10');
const display = async()=>{
    const res = await fetch(url)
    const data = await res.json()
    console.log(data);
}
display()
function myFunction(){
    demo.innerHTML = "Hello"
}
const on = document.querySelector('#on')
const off = document.querySelector('#off')
const box = document.querySelector('.box')
let count  = 0
on.addEventListener('click',()=>{
    if(count == 0){
        box.style.background = 'white'
        box.style.display = 'none'
        
        count = 1
        on.innerHTML = 'on'
    }
    else{
        box.style.background = 'yellow'
        on.innerHTML = 'off'
        box.style.display = 'block'
        count = 0
    }
})

const age =20
const a = age > 28 ? 'yes' : 'no';

const fruties = ['apple','banana','mango']

