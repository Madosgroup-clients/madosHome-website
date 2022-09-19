var menutoggle = document.querySelector('#visible_amburger');
var menuHidden = document.querySelector('.Menu');
var close = menuHidden.querySelector(".close_button");
var accessContainer = document.querySelector('.access_tools')
var languagelistactive = document.querySelector('.language_displayer');
var form = document.querySelector('.contact_information')
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
    // var ErrorCollector = false;

    validator = (DatatobeValidate) => {
        const { email, confirmation, message } = DatatobeValidate;
        let validate = false
        if (email !== confirmation) {
            document.querySelector('#confirmation').classList.add('error')
            document.querySelector('.error_text').style.display = "block"
            return validate
        } else {
            document.querySelector('#confirmation').classList.remove('error')
            document.querySelector('.error_text').style.display = "none"
            validate = true
        } if (message.split(" ").join("").length < 50) {
            document.querySelectorAll('.error_text')[1].style.display = "block"
            return validate = false
        } else {
            document.querySelectorAll('.error_text')[1].style.display = "none"
            return validate = true
        }
    }

    if (validator(DatatobeValidate)) {
        document.querySelector('.error_submit').style.display = 'none'
        document.querySelector('.success_submit').style.display = 'none'

        document.querySelector('.loading').style.display = 'block'
        var date = new Date
        date.toLocaleString('en-US', {
            weekday: 'short',
            day: 'numeric',
            year: 'numeric',
            month: 'long',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
        })
        fetch("https://mados-mailer.herokuapp.com/api/mailer/sendmail/", {
            method: "post",
            body: JSON.stringify({
                subject: "Feed back",
                variables: {
                    phoneNumber: DatatobeValidate.phoneNumber,
                    email: DatatobeValidate.email,
                    device: DatatobeValidate.devicetype,
                    dateandtime: date
                },
                email: ["info@madosgroup.com", "ndayirukiejean@madosgroup.com","ndayirukiyemoossa@gmail.com", "dieudoassumani@magosgroup.com"],
                template: 'madosgrouptemplate'
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            }
        }).then((response) => {
            document.querySelector('.loading').style.display = 'none'
            document.querySelector('.success_submit').style.display = 'block'
            form.reset()
            return response.json()

        }).catch((error) => {
            console.log(error)
            document.querySelector('.loading').style.display = 'none'
            document.querySelector('.error_submit').style.display = 'block'
            return error
        })
    }
}

const getDeviceType = () => {
    const ua = navigator.userAgent;

    if (/(tablet|iPad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
    } if (/iP(hone|od)/.test(ua)) {
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

