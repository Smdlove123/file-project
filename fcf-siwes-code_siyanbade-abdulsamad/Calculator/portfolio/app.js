const menu = document.querySelector('#mobile-menu');
const menuLink = querySelector('.navbar_menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is_active');
    menuLink.classList.toggle('active');
});