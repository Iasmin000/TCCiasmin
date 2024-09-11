function toggleMenu() {
    const menu = document.getElementById('menu');
    const menuContainer = document.querySelector('.menu-container');
    menu.classList.toggle('active');
    menuContainer.classList.toggle('menu-open');
}