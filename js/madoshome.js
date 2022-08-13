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


var DatatobeValidate = {},
    formvalidation = (event) => {
        event.stopPropagation();
        var identifier = event.target.name
        var value = event.target.value
        return DatatobeValidate = { ...DatatobeValidate, [identifier]: value }
    }

nextStep = (event) => {
    event.preventDefault()
    event.stopPropagation();
    const { email, confirmation, message } = DatatobeValidate;

    message.split(" ").join("").length < 50 || message.split(" ").join("").length >= 100
        ? document.querySelectorAll('.error_text')[1].style.display = "block"
        : document.querySelectorAll('.error_text')[1].style.display = "none"
    // if(message.s)

    if (email !== confirmation) {
        document.querySelector('#confirmation').classList.toggle('error')
        document.querySelector('.error_text').style.display = "block"
    } else {
        document.querySelector('#confirmation').classList.remove('error')
        document.querySelector('.error_text').style.display = "none"
    }
}

const getDeviceType = () => {
    const ua = navigator.userAgent;

    if (/(tablet|iPad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
    }if(/iP(hone|od)/.test(ua)){
        return "iPhone"
    }
    if (
        /Mobile|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
            ua
        )
    ) {
        return "Android";
    }
    return "Desktop";
};

var radio = document.querySelectorAll("#radio");

for (let i = 0; i < radio.length; i++) {
    getDeviceType() === radio[i].value ? radio[i].setAttribute('checked', true) : false;
}
