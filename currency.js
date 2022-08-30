const convertListen = document.querySelectorAll('.convert')
const countries = document.querySelectorAll('#country-list')




convertListen.forEach((convert)=>{
    convert.addEventListener('click', ()=>{
    const hide = convert.querySelector('.remove')
   
    hide.classList.toggle('hide-countries')
    })
})

// arrowDown.addEventListener('click', ()=>{
// countries1.classList.toggle('hide-countries1')

// })
// arrowDown.addEventListener('click', ()=>{
//     console.log(123)
    
//     })