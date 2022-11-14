
const NavBar = ({
    home = './',
}) => {
    document.querySelector('.navBar').innerHTML = `<div>
        <h1><a href=${home}> MadosHome</a> </h1>
        <div class="Menu">
            <span class="close_button">
                <i id='close' class="fas fa-times"></i>
            </span>
            <ul class="list">
                <li><a target="_blank" href='https://app.madoshome.com' class="explore">Explore</a></li>
                <li><a href="${home}#Download">Download</a></li>
                <li><a href="${home}#Features">Features</a></li>
            </ul>
        </div>
        <div class="access_tools">
            <i class="fas fa-globe"></i>
            <i id="visible_amburger" class="fas fa-bars amburger"></i>
        </div>
        <div class="language_displayer">
            <p>Select your language</p>
            <div class="language">
                <a href="/" class="active">English </a>
                <a href="./fr/">French </a>
                <a href="./sw/">Swahili </a>
            </div>
        </div>
    </div>`
}



