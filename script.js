document.addEventListener('DOMContentLoaded', () => {
    const iconMenuContainer  = document.querySelector('.icon-menu-container')
    const navLinks = document.querySelector('.nav-links')

    const carouselBtnPrevious = document.querySelector('.previous')
    const carouselBtnNext = document.querySelector('.next')

    iconMenuContainer.addEventListener('click', () => {
        iconMenuContainer.classList.toggle('expanded')
        navLinks.classList.toggle('expanded')
    })

    carouselBtnNext.addEventListener('click', () => {
        const currentSlide = document.querySelector('.current-slide')
        const nextSibling = currentSlide.nextElementSibling
        if (!nextSibling) return
        nextSibling.classList.add('current-slide')
        currentSlide.classList.remove('current-slide')
    })

    carouselBtnPrevious.addEventListener('click', () => {
        const currentSlide = document.querySelector('.current-slide')
        const prevSibling = currentSlide.previousElementSibling
        if (!prevSibling) return
        prevSibling.classList.add('current-slide')
        currentSlide.classList.remove('current-slide')
    })
})