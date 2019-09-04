$(document).ready(function () {

    setBodyHeight()

    interactionMenu()

    animationLettering('.title-sorry-msg');

    window.addEventListener("resize", function () {
        setBodyHeight()
    })
})

function setBodyHeight () {
    let header = document.querySelector('header'),
        windows_height = document.body.clientHeight,
        header_height = header.clientHeight

    document.querySelector('.main-container').style.height = windows_height
}

function interactionMenu () {
    // Open Menu
    $('.header__menu-boton').click(function() {
        $('.overlay').toggleClass('active')
        $('.header__menu-boton').toggleClass('active')
        $('.header__logo').toggleClass('active')
        $('.menu').toggleClass('active')
        $('.header').toggleClass('active')
    })
}
  
function animationLettering(element) {
    setTimeout(function(){
        $(element).lettering()

        var tittleMessage = new TimelineMax()
        tittleMessage.staggerFromTo(".title-sorry-msg span ", 0.5,
        {ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80},
        {ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.05)
    }, 500)
}