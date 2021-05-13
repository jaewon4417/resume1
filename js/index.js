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
    $('.clickme').addClass("blind")
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
    $('.clickme').removeClass("blind")
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
// 고양이
function init() { 
    const catWrapper = document.querySelector('.cat_wrapper')
    const wrapper = document.querySelector('.wrapper')
    const cat = document.querySelector('.cat')
    const head = document.querySelector('.cat_head')
    const legs = document.querySelectorAll('.leg')
    const pos = {
      x: null,
      y: null
    }
  
    const walk = () =>{
      cat.classList.remove('first_pose')
      legs.forEach(leg=>leg.classList.add('walk'))
    }
  
    const handleMouseMotion = e =>{
      pos.x = e.clientX
      pos.y = e.clientY
      walk()
    }
  
    const handleTouchMotion = e =>{
      if (e.targetTouches) return
      
      pos.x = e.targetTouches[0].offsetX
      pos.y = e.targetTouches[0].offsetY
      walk()
    }
  
    const turnRight = () =>{
      cat.style.left = `${pos.x - 90}px`
      cat.classList.remove('face_left')
      cat.classList.add('face_right')
    }
  
    const turnLeft = () =>{
      cat.style.left = `${pos.x + 10}px`
      cat.classList.remove('face_right')
      cat.classList.add('face_left')
    }
  
    const decideTurnDirection = () =>{
      cat.getBoundingClientRect().x < pos.x ?
        turnRight()
        :
        turnLeft()
    }
  
    const headMotion = () =>{
      pos.y > (wrapper.clientHeight - 100) ?
        head.style.top = '-15px'
        :
        head.style.top = '-30px'
    }
  
    const jump = () =>{
      catWrapper.classList.remove('jump')
      if (pos.y < (wrapper.clientHeight - 250)) {
        setTimeout(()=>{
          catWrapper.classList.add('jump')
        },100)
      } 
    }
  
    const decideStop = ()=>{
      if (cat.classList.contains('face_right') && pos.x - 90 === cat.offsetLeft ||
          cat.classList.contains('face_left') && pos.x + 10 === cat.offsetLeft) {
        legs.forEach(leg=>leg.classList.remove('walk'))    
      }
    }
    
    setInterval(()=>{
      if (!pos.x || !pos.y) return
      decideTurnDirection()
      headMotion()
      decideStop()
    },100)
  
    setInterval(()=>{
      if (!pos.x || !pos.y) return
      jump()
    },1000)
  
    document.addEventListener('mousemove', handleMouseMotion)
    document.addEventListener('mousemove', handleTouchMotion)
  }
  
  window.addEventListener('DOMContentLoaded', init)