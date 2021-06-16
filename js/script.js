'use strict';

$(function(){
    /* ================= change theme ===================== */
    $('#buttonDark').click(function(){
        $(this).hide();
        $('body').addClass('dark-theme');
        $('body').removeClass('bgu')
        $('#buttonLight').show();
    })
    $('#buttonLight').click(function(){
        $('body').removeClass('dark-theme');
        $('body').addClass('bgu')
        $('#buttonDark').show();
        $(this).hide();
    })

    /* ================= navbar ===================== */
    var $navItem = $('.nav__item');
    $navItem.click(function(e){
        e.preventDefault();
        var link = $(this).children('a').attr('data-link');
        var $target = $(link);
        var distance = $target.offset().top;
        $('html, body').animate({scrollTop: distance});
        $('.nav__container').removeClass('visible');
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    })

    /* nav toggle */
    $('#navToggle, .nav__close').click(function(){
        $('.nav__container').toggleClass('visible');
    })
    /* ================ about=============== */
    $('.stoudyCount, .pracCount, .projectCount').each(function () {
        $(this).prop('Counter',0).animate({
                Counter: $(this).text()
        }, {
                duration: 3000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
            }
        });
    });
    /* ================= skill tabs ================= */
    $('.skills__header').click(function(){
        $(this).children('.skill__icon--arrow').toggleClass('active');
        $(this).siblings('.skill__data').stop().slideToggle();
    })

})
