const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const hamburgerMenu = document.getElementsByClassName('hamburger');
const mobileMenu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header .container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    mobileMenu.classList.toggle('active')
})

window.addEventListener("scroll", scroll)

function scroll() {
    if(document.documentElement.scrollTop > 100){
        document.getElementById("header").style.top = "-70px"
    }else{
        document.getElementById("header").style.top = "0"
    }
}

