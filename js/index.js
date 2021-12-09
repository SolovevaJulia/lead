console.log('Подключен')


const buttons = {
    more: document.querySelector('.header-menu-list-item__more'),
    menu: document.querySelector('.header-menu-mobile-button')
}
const wrapper = {
    menu: document.querySelector('.header-menu-list-mobile'),
    mobile: document.querySelector('.modal-menu')
}

const listenerButtons = (e) => {
    console.log('buttons', wrapper.menu.style.display)
    if(wrapper.menu.style.display === 'block') {
        wrapper.menu.style.display = 'none'
    } else {
        wrapper.menu.style.display = 'block'
    }
    
}

buttons.more.addEventListener('click', (e) =>  listenerButtons(e))
buttons.menu.addEventListener('click', (e) => {
    if ( wrapper.mobile.style.display === 'block') {
         wrapper.mobile.style.display = 'none'
    } else {
        wrapper.mobile.style.display = 'block'
    }
})
