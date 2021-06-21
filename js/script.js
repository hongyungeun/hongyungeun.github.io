'use strict';

$(function(){
    /* ================= change theme ===================== */
    $('#buttonDark').click(function(){
        $(this).hide();
        $('body').addClass('dark-theme');
        $('#buttonLight').show();
    })
    $('#buttonLight').click(function(){
        $('body').removeClass('dark-theme');
        $('#buttonDark').show();
        $(this).hide();
    })
    var $home = $('.home')
    var mainDistance = $('.main').offset.top()
    var $mainItem = $('.main-container')
    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop()
        if( scrollTop > mainDistance){
            $mainItem.addClass('main-fixed')
        }else if( scrollTop = $home){
            $mainItem.removeClass('main-fixed')
        }else {
            $mainItem.removeClass('main-fixed')
        }
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
    
    
    /* ================= skill tabs ================= */
    $('.skills__header').click(function(){
        $(this).children('.skill__icon--arrow').toggleClass('active');
        $(this).siblings('.skill__data').stop().slideToggle();
    })
    /* ================= scroll magic =============== */
    // 생성자 
    var controller = new ScrollMagic.Controller()

    // 매개변수(누구, 시간, 어떻게)
    // 마지막 엘리먼트의 상태
    var box = TweenMax.to('.main-box', 1,{
        width: 0,
        autoAlpha: 0,/* opcity */
        
    })
    // 변수는자유
    var scene = new ScrollMagic.Scene({

        /* 
            트리거를 발생시킬 엘리먼트 범위
         */
        triggerElement: '.main',
        /* 
            trigger의 위치 0~1
            y축
         */
        triggerHook: 0,
        /* 
            trigger 시작 event 위치 지정
         */
        offset: 0,
        /* 
            trigger의 마지막 evnet위치
            default: 100vh
        */
        duration: "70%"
    })
    .setTween(box)
    .addTo(controller)
    

    var title = TweenMax.to('.main-title', 1,{
        autoAlpha: 0,/* opcity */
        
    })
    var scene2 = new ScrollMagic.Scene({
        triggerElement: '.main',
        triggerHook: 0,
        offset: 200,
        duration: "100%"
    })
    .setTween(title)
    .addTo(controller)
    
    var subTitle = TweenMax.to('.main-sub-title', 1,{
        autoAlpha: 1,/* opcity */
        
    })
    var scene3 = new ScrollMagic.Scene({
        triggerElement: '.main',
        triggerHook: 0,
        offset: 600,
        duration: "150%"
        
    })
    .setTween(subTitle)
    .addTo(controller)
    
    var subTitle = TweenMax.to('.main-sub-title', 1,{
        autoAlpha: 0,/* opcity */
        
    })
    var scene3 = new ScrollMagic.Scene({
        triggerElement: '.main',
        triggerHook: 0,
        offset: 600,
        duration: "240%"
    })
    .setTween(subTitle)
    .addTo(controller)
    
    /* ==================slick=================== */
    $('.fade').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
})
