document.addEventListener('DOMContentLoaded', () => {
    const iconMenuContainer  = document.querySelector('.icon-menu-container')
    const navLinks = document.querySelector('.nav-links')
    iconMenuContainer.addEventListener('click', () => {
        iconMenuContainer.classList.toggle('expanded')
        navLinks.classList.toggle('expanded')
    })
})