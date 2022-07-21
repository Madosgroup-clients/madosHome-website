var menutoggle = document.querySelector('#amburger');
var menuHidden = document.querySelector('.navigation_menu_expanded');
var close = menuHidden.querySelector("#close");


menutoggle.addEventListener('click', (e)=>{
    e.stopPropagation();
    menuHidden.classList.toggle('appear')

})
close.addEventListener('click', (e)=>{
    e.stopPropagation();
    menuHidden.classList.remove('appear')
})