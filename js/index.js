$(document).ready(function(){

    $('.nav .depth1 > li').on('click', function(){
        $(this)
        .addClass('on')
        .siblings().removeClass('on')
    })
    var ww;
    var wh;
    function init(){
        ww = $(window).width()
        wh = $(window).height()
        
    }
    
    init()
    
    $(window).on('resize', function(){
        init()
    })
    
    
    // var article3Near = $('.article3').offset().top - (wh/2+100)
    
    // $(window).on('scroll', function(){
    // var sct = $(this).scrollTop()
    
    // })
})
// 마우스 
// http://ahrengot.com/tutorials/greensock-javascript-animation

var $circle = $('.circle');

function moveCircle(e) {
  TweenLite.to($circle, 0.3, {
    css: {
      left: e.pageX,
      top: e.pageY
    }
  });
}

$(window).on('mousemove', moveCircle);

// about me button
function onButtonClick() {
    $('.aboutme_off').addClass("blind")
    $('.aboutme_on').removeClass("blind")
    $('.on_btn_box').addClass("blind")
    $('.off_btn_box').removeClass("blind")
    $('.article1 .row').css({
        // 여기만 바꾸면 돼
        backgroundColor : "#F2E1CD"
    })
}
// about me button
function offButtonClick() {
    $('.aboutme_on').addClass("blind")
    $('.aboutme_off').removeClass("blind")
    $('.off_btn_box').addClass("blind")
    $('.on_btn_box').removeClass("blind")
    $('.article1 .row').css({
        // 여기만 바꾸면 돼
        backgroundColor : "#4A4A4A"
    })
}
// introduce 애니메이션


// 주전자
function clickWaterAni() {
    $(this).css({
        display: "none"
    })
    $('.watercan').addClass("on")
    $('.watering_can_box').css({
        transform: "rotate(-30deg)",
        transition: "all 0.5s"
    })
    $('.water_box').css({
        opacity: "1",
        transition: "all 0s 0.5s"
    })
    $('.myscore').addClass("on")
}

function closeWebDesignBox() {
    $('.webdesign_bg').addClass("blind")
}

function openWebDesignBox() {
    $('.webdesign_bg').removeClass("blind")
}