const unRead = document.querySelectorAll('.unread')
const numberNotification = unRead.length

const placeNumberNotification = document.querySelector('.number-notification')

placeNumberNotification.textContent = numberNotification;

unRead.forEach((item)=>{
    item.addEventListener('click', ()=>{
        item.classList.remove('unread')
    })
})


const allRead = document.querySelector('.all-read')


allRead.addEventListener('click', ()=>{
    console.log('clicou')
})

