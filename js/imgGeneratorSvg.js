const svg_container = document.querySelector('.main_svg')


var img = [
    "https://www.svgrepo.com/show/530373/camera-take-pictures.svg",
    "https://www.svgrepo.com/show/501858/compass-compass.svg",
    "https://www.svgrepo.com/show/527709/filter.svg",
    "https://s3.eu-west-3.amazonaws.com/media.madoshome/utils/home.svg",
    "https://s3.eu-west-3.amazonaws.com/media.madoshome/utils/map-pin.svg",
    "https://s3.eu-west-3.amazonaws.com/media.madoshome/utils/map.svg",
    "https://s3.eu-west-3.amazonaws.com/media.madoshome/utils/search.svg",
    "https://s3.eu-west-3.amazonaws.com/media.madoshome/utils/smartphone.svg",
    "https://s3.eu-west-3.amazonaws.com/media.madoshome/utils/users.svg",
]
const getRandomArbitrary = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const svgGenerator = Array.from({ length: 100 }, (_, i) => {
    return {
        id: getRandomArbitrary(2, 50),
        img: img[getRandomArbitrary(0, img.length - 1)]
    }
})

svgGenerator.map((e, i) => {
    svg_container.innerHTML += `<img key=${i} src=${e.img} style="--i:${e.id}" alt="madosHomeIcons">`
})

// scrolling animation 

// body_scroll.addEventListener("scroll", addstickybackground = (event)=>{
//     event.stopPropagation();
//     navigation.classList.add('stickybackground')
// })


// intersection observer 


// body_scroll.addEventListener('scroll', ()=>{

// })

const sectionDownload = document.querySelector("section");
const background = document.querySelector('.stickybackground')

const options = {
    root: null,
    threshold: 0,
    rootMargin: "-90px 0px -90px 0px"
}

const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
            if(entry.isIntersecting){
                background.classList.remove("background")
                
            }else{
                background.classList.add("background")
            }
    });
}, options)


observer.observe(sectionDownload)





