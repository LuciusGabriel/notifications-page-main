const unReadMessages = document.querySelectorAll('.unread')
const unRead = document.querySelector('#notifications')
const readAll = document.querySelector('#mark_all')

unRead.innerText = unReadMessages.length

unReadMessages.forEach((message) =>{
    message.addEventListener('click', () => {
        message.classList.remove('unread')
        const newUnread = document.querySelectorAll('.unread')
        unRead.innerText = newUnread.length
    })
})

readAll.addEventListener('click', ()=>{
    unReadMessages.forEach((message)=>{
        message.classList.remove('unread')
    })


    const newUnread = document.querySelectorAll('.unread')
    unRead.innerText = newUnread.length
})


