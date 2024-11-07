function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        setTimeout(() => {
            menu.style.display = 'none'; 
        }, 300); 
    } else {
        menu.style.display = 'block'; 
        setTimeout(() => {
            menu.classList.add('show');     
        }, 10);    
    }
}