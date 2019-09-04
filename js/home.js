$(document).ready(function(){
    
    setBodyHeight()

    scrollToSection()

    loadTypewriter()
    
    interactionMenu()

    interactionTabs()

    interactionScroll()

    loadSliders()

    unloadSliders()
    
    randomPhotos()

    validateForm()

    window.addEventListener('resize', function () {
        setBodyHeight()
        //unloadSliders()
    })
})

function scrollToSection() {
    let ancla = getUrlParameter('go'),
        header = document.querySelector('header'),
        header_height = header.clientHeight

    if ( ancla === undefined ) {
        return
    } else if ( ancla === 'projects' ) {
        $('html, body').animate({
            scrollTop: $('.main-container__projects').offset().top - header_height
        }, 1000)
    } else if ( ancla === 'brands' ) {
        $('html, body').animate({
            scrollTop: $('.main-container__brands').offset().top - header_height
        }, 1000)
    } else if ( ancla === 'contact' ) {
        $('html, body').animate({
            scrollTop: $('.main-container__contact').offset().top - header_height
        }, 1000)
    }
}

function getUrlParameter(sParam) {
    let sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=')

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1])
        }
    }
}

function loadSliders () {

    $('.main-container__projects__tabs').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        dots: false,
        prevArrow: '<span class="slick-prev"></span>',
        nextArrow: '<span class="slick-next"></span>'
    })

    $('.main-container__brands__slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        autoplay: false,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: false,
                    dots: true,
                }
            }
        ]
    })

    // ------------------------------
    if ( document.body.clientWidth >= 1024 ) {
        $('#tab_diseno').slick({
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 4,
            autoplay: false,
            dots: true,
            arrows: false
        })   
    } else {
        $('#tab_diseno').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            dots: true,
            arrows: false
        })   
    }     
    
    $('.main-container__what-we-do__slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        arrows: false
    })

    $('.main-container__agency-block__second__slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        //autoplay: true,
        dots: true,
        arrows: false
    })

    $('.main-container__agency-block__second .slick-dots li button').each(function() {
        $(this).text( '0' + $(this).text() )
    })    
}

function unloadSliders () {
    if ( document.body.clientWidth >= 1024 ) {
        $('.main-container__projects__tabs').slick('unslick');
        $('.main-container__brands__slider').slick('unslick');
        $('.main-container__what-we-do__slider').slick('unslick');
    }
}

function randomPhotos () {
    let min = 1,
        max = 4,
        minOpacity = 1,
        maxOpacity

    if ( screen.width < 768 ) {
        maxOpacity = 9

        setInterval(function(){
            $('.main-container__our-team__photos > div').css('opacity','1')
            $('.main-container__our-team__photos > div:nth-child(' + (Math.floor(Math.random() * maxOpacity) + minOpacity) + ')').css('opacity','0')
            $('.main-container__our-team__photos > div:nth-child(' + (Math.floor(Math.random() * maxOpacity) + minOpacity) + ')').css('opacity','0')
        }, 3000)

    } else if ( screen.width >= 768 && screen.width <= 1024 ) {
        maxOpacity = 12

        setInterval(function(){
            $('.main-container__our-team__photos > div').css('opacity','1')
            $('.main-container__our-team__photos > div:nth-child(' + (Math.floor(Math.random() * maxOpacity) + minOpacity) + ')').css('opacity','0')
            $('.main-container__our-team__photos > div:nth-child(' + (Math.floor(Math.random() * maxOpacity) + minOpacity) + ')').css('opacity','0')
            $('.main-container__our-team__photos > div:nth-child(' + (Math.floor(Math.random() * maxOpacity) + minOpacity) + ')').css('opacity','0')
        }, 3000)

    } else if ( screen.width > 1024 ) {
        maxOpacity = 40

        setInterval(function(){
            $('.main-container__our-team__photos > div').css('opacity','1')
            $('.main-container__our-team__photos > div:nth-child(' + (Math.floor(Math.random() * maxOpacity) + minOpacity) + ')').css('opacity','0')
            $('.main-container__our-team__photos > div:nth-child(' + (Math.floor(Math.random() * maxOpacity) + minOpacity) + ')').css('opacity','0')
            $('.main-container__our-team__photos > div:nth-child(' + (Math.floor(Math.random() * maxOpacity) + minOpacity) + ')').css('opacity','0')
            $('.main-container__our-team__photos > div:nth-child(' + (Math.floor(Math.random() * maxOpacity) + minOpacity) + ')').css('opacity','0')
        }, 3000)
    }

    setInterval(function(){
        $('.main-container__our-team__photos > div').each(function() {
            $(this).css('background-image','url("./img/team-' + (Math.floor(Math.random() * max) + min) + '.jpg")')
        })        
    }, 3000)
}

function setBodyHeight () {
    let windows_height = document.body.clientHeight,
        windows_width = document.body.clientWidth,
        header = document.querySelector('header'),
        header_height = header.clientHeight

    // Setting full height only for viewport bigger than 1024
    if ( windows_width >= 1024 ) {
        document.querySelector('.main-container__agency-block__first').style.height = windows_height
        document.querySelector('.main-container__agency-block__second').style.height = windows_height - header_height
        document.querySelector('.main-container__what-we-do').style.height = windows_height - header_height
        document.querySelector('.main-container__projects').style.height = windows_height - header_height
        document.querySelector('.main-container__brands').style.height = windows_height - header_height
        document.querySelector('.main-container__our-team').style.height = windows_height - header_height
        document.querySelector('.main-container__contact').style.height = windows_height - header_height
    } else {
        document.querySelector('.main-container__agency-block__first').style.height = 600
        document.querySelector('.main-container__agency-block__second').style.height = 600 - header_height
        document.querySelector('.main-container__what-we-do').style.height = 600 - header_height
        document.querySelector('.main-container__projects').style.height = 600 - header_height
        document.querySelector('.main-container__brands').style.height = 600 - header_height
        document.querySelector('.main-container__our-team').style.height = 600 - header_height
        document.querySelector('.main-container__contact').style.height = 600 - header_height
    }        
}

function interactionTabs () {
    $('.main-container__projects__tabs .main-container__projects__tabs__item span').click(function() {
        // For desktop version
        if ( document.body.clientWidth >= 1024 ) {
            $('.main-container__projects__tabs .main-container__projects__tabs__item').removeClass('active')
            $(this).parent().addClass('active')

            $('.main-container__projects__slider').removeClass('active')
            $('#tab_' + $(this).attr('tab')).addClass('active')
            $('#tab_' + $(this).attr('tab')).slick({
                infinite: false,
                slidesToShow: 4,
                slidesToScroll: 4,
                autoplay: false,
                dots: true,
                arrows: false
            })
        }
    })    

    // For mobile version
    $('.main-container__projects__tabs').click('.slick-arrow',function() {
        if ( document.body.clientWidth < 1024 ) {
            $('.main-container__projects__tabs .main-container__projects__tabs__item').each(function() {
                if ( $(this).hasClass('slick-active') == true ) {

                    $('.main-container__projects__slider').removeClass('active')
                    $('#tab_' + $(this).find('span').attr('tab')).addClass('active')
                    $('#tab_' + $(this).find('span').attr('tab')).slick({
                        infinite: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: false,
                        dots: true,
                        arrows: false
                    })
                }
            })
        }
    })

    // For detail
    $('.main-container__projects__slider__item span, .main-container__projects__slider__item .hover-desk').click(function() {
        $('.main-container__projects__detail').removeClass('active')            
        $('#' + $(this).attr('detail')).addClass('active')
    })

    $('.detail-back').click(function() {
        $('.main-container__projects__detail').removeClass('active')
    })    
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

    $('.menu ul li a').click(function() {
        let ancla = $(this).attr('id'),
            header = document.querySelector('header'),
            header_height = header.clientHeight

        if ( ancla === 'projects' ) {
            $('html, body').animate({
                scrollTop: $('.main-container__projects').offset().top - header_height
            }, 1000)
        } else if ( ancla === 'brands' ) {
            $('html, body').animate({
                scrollTop: $('.main-container__brands').offset().top - header_height
            }, 1000)
        } else if ( ancla === 'contact' ) {
            $('html, body').animate({
                scrollTop: $('.main-container__contact').offset().top - header_height
            }, 1000)
        }

        $('.overlay').removeClass('active')
        $('.header__menu-boton').removeClass('active')
        $('.header__logo').removeClass('active')
        $('.menu').removeClass('active')
        $('.header').removeClass('active')
    })
}

function interactionScroll () {
    let header = document.querySelector('header'),
        header_height = header.clientHeight

    if ( screen.width < 768 ) {
        $('.scroll-down').click(function (){
            $('html, body').animate({
                scrollTop: $('.main-container__agency-block__second').offset().top - header_height
            }, 1000)
        })
    } if ( screen.width >= 768 ) {
        $('.scroll-down').click(function (){
            $('html, body').animate({
                scrollTop: $('.main-container__what-we-do').offset().top - header_height
            }, 1000)
        })
    }
}

let TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate
    this.el = el
    this.loopNum = 0
    this.period = parseInt(period, 10) || 2000
    this.txt = ''
    this.tick()
    this.isDeleting = false
}

TxtType.prototype.tick = function() {
    let i = this.loopNum % this.toRotate.length,
        fullTxt = this.toRotate[i]

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1)
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1)
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>'

    let that = this,
        delta = 200 - Math.random() * 100

    if (this.isDeleting) {
        delta /= 2
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period
        this.isDeleting = true
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false
        this.loopNum++
        delta = 500
    }

    setTimeout(function() {
        that.tick()
    }, delta)
}

function loadTypewriter () {
    let elements = document.getElementsByClassName('typewrite')
    for (let i=0; i<elements.length; i++) {
        let toRotate = elements[i].getAttribute('data-type'),
            period = elements[i].getAttribute('data-period')

        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period)
        }
    }
    // INJECT CSS
    let css = document.createElement('style')
    css.type = 'text/css'
    css.innerHTML = '.typewrite > .wrap { border-right: 0.08em solid #fff}'
    document.body.appendChild(css)
}

function validateForm () {    
    $( 'input[name="phone"]' ).keypress(isNumberKey);

    $('#contacForm').on('submit', function (evt) {
        evt.preventDefault()
    }).validate({
        rules: {
            firstname: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            phone : {
                required: true,
                minlength: 9,
                maxlength: 9
            }
        },
        messages: {
            firstname: {
                required: 'Ingresa tu nombre'
            },
            email: {
                required: 'Ingresa tu correo',
                email:  'Email no válido.'
            },
            phone: {
                minlength: 'Celular no válido',
                required: 'Celular no válido'
            }
        },
    })
}

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if ((charCode < 48 || charCode > 57)) 
        return false;
    return true;
}