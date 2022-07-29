var menutoggle = document.querySelector('#visible_amburger');
var menuHidden = document.querySelector('.Menu');
var close = menuHidden.querySelector(".close_button");
var accessContainer = document.querySelector('.access_tools')
var languagelistactive = document.querySelector('.language_displayer');

var menuselection = languagelistactive.querySelector('language');
// menuselection = menuselection.querySelectorAll('a');



// for (let i = 0; i < menuselection.length; i++) {
//     menuselection[0].classList.toggle("active")

//     menuselection[i].addEventListener('click', (event) => {
//         event.stopPropagation();
//         var selected = i;
//         for (let j = 0; j < menuselection.length; j++) {
//             if (j != selected) {
//                 menuselection[j].classList.remove("active");
//             } else {
//                 menuselection[j].classList.toggle("active")
//             }
//             if (j === selected) {
//                 menuselection[j].classList.remove("active");
//                 menuselection[j].classList.toggle("active")
//             }
//         }

//     })

// }

// console.log(languagelistactive)

var language = accessContainer.querySelector('i');

language.addEventListener('click', (event) => {
    event.stopPropagation();
    languagelistactive.classList.toggle('visible')
})


menutoggle.addEventListener('click', (e) => {
    e.stopPropagation();
    menuHidden.classList.toggle('appear')
})
close.addEventListener('click', (e) => {
    e.stopPropagation();
    menuHidden.classList.remove('appear')
})

// language();