var menutoggle = document.querySelector('#visible_amburger');
var menuHidden = document.querySelector('.Menu');
var close = menuHidden.querySelector(".close_button");


menutoggle.addEventListener('click', (e)=>{
    e.stopPropagation();
    menuHidden.classList.toggle('appear')
})
close.addEventListener('click', (e)=>{
    e.stopPropagation();
    menuHidden.classList.remove('appear')
})