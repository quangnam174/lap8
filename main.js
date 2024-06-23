const modal1 = document.querySelector('.modal1')
const modal2 = document.querySelector('.modal2')
const modal3 = document.querySelector('.modal3')
const overlay = document.querySelector('.overlay')
const closemodal1 = document.querySelector('.close-modal1')
const closemodal2 = document.querySelector('.close-modal2')
const closemodal3 = document.querySelector('.close-modal3')
const openmodal1 = document.querySelector('.btn1')
const openmodal2 = document.querySelector('.btn2')
const openmodal3 = document.querySelector('.btn3')
// console.log(openmodal)
// openmodal.addEventListener('click',function(){
//     modal.classList.remove('hidden')
//     overlay.classList.remove('hidden')
// })
// closemodal.addEventListener('click',function(){
//     modal.style.display = 'none'
//     overlay.style.display = 'none'
// })
openmodal1.addEventListener('click',function(){
    modal1.style.display = 'block'
    modal2.style.display = 'none'
    modal3.style.display = 'none'
    closemodal1.addEventListener('click', function(){
        modal1.style.display = 'none'

    })
})
openmodal2.addEventListener('click',function(){
    modal1.style.display = 'none'
    modal2.style.display = 'block'    
    modal3.style.display = 'none'
    closemodal2.addEventListener('click', function(){
        modal2.style.display = 'none'
    })
})
openmodal3.addEventListener('click',function(){
    modal1.style.display = 'none'
    modal2.style.display = 'none'
    modal3.style.display = 'block'
    closemodal3.addEventListener('click', function(){
        modal3.style.display = 'none'
    })
})


