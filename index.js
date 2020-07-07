const button=document.querySelector('.navbar-toggler')
console.log(button)
button.addEventListener('click',()=>{
const navbar=document.querySelector('#navbar')
navbar.classList.toggle('show')
})

const main=document.querySelector('.container-main')

 var a=main.clientWidth

console.log(a)

