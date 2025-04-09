
// Header

const headerFixced = document.querySelector('.header')

window.addEventListener('scroll', () => {
    const headerHeight = headerFixced.clientHeight / 20;
    const skrollTop = window.scrollY;

    if(skrollTop >= headerHeight) {
        headerFixced.classList.add('header-fixced') 
    }else {
        headerFixced.classList.remove('header-fixced')
    }
})

// Burger-

const menuHeader = document.querySelector('.header__menu--is-active')

document.addEventListener('click', (event)=> {
    if(event.target.closest('.burger-button')) {
        menuHeader.classList.add('menu-active')
    }else {
        menuHeader.classList.remove('menu-active')
    }
})

























