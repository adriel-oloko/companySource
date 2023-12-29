jQuery.noConflict();
jQuery(document).ready( function($) {
    $('#loaderContainer').delay(3000).fadeOut(500)
    $('#mobileMenu').fadeOut()

    let xx = 0
    var prev = 0
    var prevFS = 0
    let page = 1
    var slideChecker = false
    let heroMarginBottom = parseFloat($('h2#role').css('marginBottom'))
    
    /**
     * Page 1 Image bOx and name
     * Page 2 Tchnologies
     * Page 3 Projects/About me (double Page slider)
     * Page 5 COntact
     * 
     */
    let index = 0
    setInterval(() => {
        index++
        if (index <= 3) {
            $('#HeroSc').animate({
                scrollTop: $('#HeroSc').scrollTop() + $('#HeroSc').height() + 3 +index +'px'
            }, 'slow')
        } else {
            index = 0
            $('#HeroSc').scrollTop(index)
        }
    }, 1500)
    
    function reveal() {
        var reveals = document.querySelectorAll(".container, .container-left");

        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;

          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
    }

    
    $('html, body').scroll(() => {
        reveal()

        if ($('html, body').width() < 1024) {
            document.getElementById('textBox').style.transform = 'translateX(0)'
            document.getElementById('textBox').style.opacity = '1'
            document.getElementById('textBox').style.transition = 'all 1s'
        }
    })

    $('#bars').click(() => {
        $('html, body').css('overflow', 'hidden')
        $('header, main, footer').css('display', 'none')
        $('#mobileMenu').fadeIn(300)
        $('#mobileMenu *').delay(300).animate({
            opacity: '1'
        }, 'slow')

        document.getElementById('close').style.display = 'inline'
        document.getElementById('close').style.opacity = '1'
        document.getElementById('close').style.transition = 'opacity 2s'

        document.getElementById('bars').style.display = 'none'
        document.getElementById('bars').style.opacity = '0'
        document.getElementById('bars').style.transition = 'opacity 2s'

    })

    const close = () => {
        $('html, body').css('overflowY', 'auto')
        $('header, main, footer').css('display', '')
        $('#mobileMenu').delay(700).fadeOut(300)
        $('#mobileMenu *').animate({
            opacity: '0'
        }, 'slow')

        document.getElementById('close').style.display = 'none'
        document.getElementById('close').style.opacity = '0'
        document.getElementById('close').style.transition = 'opacity 2s'

        document.getElementById('bars').style.display = 'inline'
        document.getElementById('bars').style.opacity = '1'
        document.getElementById('bars').style.transition = 'opacity 2s'
    }
    $('#close').click(() => {
        close()
    })

    $('.wwa').click(() => {
        close()

        $('html, body').delay(700).animate({
            scrollTop: $('header').outerHeight()+150
        }, 'slow')
    })

    $('.wwd').click(() => {
        close()

        $('html, body').delay(700).animate({
            scrollTop: $('#services').offset().top-150
        }, 'slow')
    })

    $('.op').click(() => {
        close()

        $('html, body').delay(700).animate({
            scrollTop: $('#page3').offset().top
        }, 'slow')
    })

    $('.contact').click(() => {
        close()

        $('html, body').delay(700).animate({
            scrollTop: $('footer').offset().top
        }, 'slow')
    })
})

const linkClickFunction = (url) => {
    window.open(url, '_blank')
}