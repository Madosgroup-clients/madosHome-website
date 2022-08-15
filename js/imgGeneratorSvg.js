const svg_container = document.querySelector('.main_svg')

var img = [
    "../img/svg_cover/camera.svg",
    "../img/svg_cover/compass.svg",
    "../img/svg_cover/compass_2.svg",
    "../img/svg_cover/filter.svg",
    "../img/svg_cover/home.svg",
    "../img/svg_cover/map-pin.svg",
    "../img/svg_cover/map.svg",
    "../img/svg_cover/search.svg",
    "../img/svg_cover/smartphone.svg",
    "../img/svg_cover/users.svg"
]
const getRandomArbitrary = (min, max)=>{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const svgGenerator = Array.from({length : 31}, (_,i) =>{
    return {
        id : getRandomArbitrary(2,50),
        img : img[getRandomArbitrary(0, img.length-1)]
    }
})

svgGenerator.map((e,i)=>{
    svg_container.innerHTML += `<img key=${i} src=${e.img} style="--i:${e.id}" alt="madosHomeIcons"><>`
})