 //小畫面清單點擊交替收放
 $('#hamburger').click(function() {
    $('#menu_min').slideToggle()
})

//監聽螢幕視窗大小變更，隱藏小畫面清單
$(window).resize(function() {
    var x = $(window).width()
    if (x > 820) {
        $('#menu_min').slideUp()
    }
})


//留言捲軸輪撥
var reel = 0
setInterval(function() {
    if (reel > 100) {
        reel = 0
        $('#testimonial_body ul').css('transform', `translateX(-${reel}%)`)
    } else {
        reel = reel + 100
        $('#testimonial_body ul').css('transform', `translateX(-${reel}%)`)
    }
    reel_list()


}, 3000)

//點擊觸發捲軸移動
$('#reel_01').click(function() {
    reel = 0
    $('#testimonial_body ul').css('transform', `translateX(-${reel}%)`)
    reel_list()
})
$('#reel_02').click(function() {
    reel = 100
    $('#testimonial_body ul').css('transform', `translateX(-${reel}%)`)
    reel_list()
})
$('#reel_03').click(function() {
    reel = 200
    $('#testimonial_body ul').css('transform', `translateX(-${reel}%)`)
    reel_list()
})

//捲軸清單變色呼叫函式
function reel_list() {
    if (reel == 100) {
        $('.reel li').removeClass('reel_color')
        $('#reel_02').addClass('reel_color')
    } else if (reel == 200) {
        $('.reel li').removeClass('reel_color')
        $('#reel_03').addClass('reel_color')
    } else {
        $('.reel li').removeClass('reel_color')
        $('#reel_01').addClass('reel_color')
    }
}

//gotop點擊滑動置頂
$('#gotop').click(function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

//捲軸滑動事件
var scroll = $(window).scroll(function() {
    if (scroll.scrollTop() > $('#main').offset().top) {
        $('#gotop').css('display', 'block');
    } else {
        $('#gotop').css('display', 'none')
    };

    if(scroll.scrollTop() > $('#game').offset().top-100){
        $('.gamebody div:nth-child(1)').css('transform','translateX(0%)').css('transition','1.5s')
        $('.gamebody div:nth-child(2)').css('transform','translateX(0%)').css('transition','1.5s')
        document.querySelector('.gamebody div').addEventListener('transitionend',function(){
            $('.gamebody div').css('transition','0.5s')
        })
    }

    if(scroll.scrollTop() > $('.gamebody div:nth-child(1)').offset().top-100){
        $('.gamebody div:nth-child(3)').css('transform','translateX(0%)').css('transition','1s')
        $('.gamebody div:nth-child(4)').css('transform','translateX(0%)').css('transition','1s')
        if($(window).width() <1023){
            $('.gamebody div:nth-child(3)').css('transform','translateY(100%)')
            $('.gamebody div:nth-child(4)').css('transform','translateY(-100%)')
        };
        console.log($(window).width())
        document.querySelector('.gamebody div').addEventListener('transitionend',function(){
            $('.gamebody div').css('transition','0.5s')
        })
    }

    if(scroll.scrollTop() > $('#dining').offset().top-200){
        $('.diningbody div:nth-child(1)').css('transform','rotateY(0deg)').css('transition','1s')
        setTimeout(function(){
            $('.diningbody div:nth-child(2)').css('transform','rotateY(0deg)').css('transition','1s')
        },500)
        setTimeout(function(){
            $('.diningbody div:nth-child(3)').css('transform','rotateY(0deg)').css('transition','1s')
        },800)
        setTimeout(function(){
            $('.diningbody div:nth-child(4)').css('transform','rotateY(0deg)').css('transition','1s')
        },1100)
        document.querySelector('.diningbody div').addEventListener('transitionend',function(){
            $('.diningbody div').css('transition','0.5s')
        })
    }



});


//點擊選單前往相對應位置
$('.toGame').click(function(){
    window.scrollTo({
        top: $('#game').offset().top,
        behavior: "smooth"
    });
    $('.gamebody div:nth-child(1)').css('transform','translateX(0%)').css('transition','1.5s')
    $('.gamebody div:nth-child(2)').css('transform','translateX(0%)').css('transition','1.5s')
    document.querySelector('.gamebody div').addEventListener('transitionend',function(){
        $('.gamebody div').css('transition','0.5s')
    })
});

$('.toDining').click(function(){
    window.scrollTo({
        top: $('#dining').offset().top,
        behavior: "smooth"
    });
    setTimeout(function(){
        $('.diningbody div:nth-child(1)').css('transform','rotateY(0deg)').css('transition','1s')
    },500)
    setTimeout(function(){
        $('.diningbody div:nth-child(2)').css('transform','rotateY(0deg)').css('transition','1s')
    },800)
    setTimeout(function(){
        $('.diningbody div:nth-child(3)').css('transform','rotateY(0deg)').css('transition','1s')
    },1100)
    setTimeout(function(){
        $('.diningbody div:nth-child(4)').css('transform','rotateY(0deg)').css('transition','1s')
    },1400)
    document.querySelector('.diningbody div').addEventListener('transitionend',function(){
        $('.diningbody div').css('transition','0.5s')
    })

});

$('.toBlog').click(function(){
    window.scrollTo({
        top: $('#blog').offset().top,
        behavior: "smooth"
    });
});

$('.toTestimonial').click(function(){
    window.scrollTo({
        top: $('#testimonial').offset().top,
        behavior: "smooth"
    });
});

$('.toMessage').click(function(){
    window.scrollTo({
        top: $('#message').offset().top,
        behavior: "smooth"
    });
});

//playNow點擊後前往game here遊戲區域
$('#playNow').click(function(){
    window.scrollTo({
        top: $('#game').offset().top,
        behavior: "smooth"
    });
    $('.gamebody div:nth-child(1)').css('transform','translateX(0%)').css('transition','1.5s')
    $('.gamebody div:nth-child(2)').css('transform','translateX(0%)').css('transition','1.5s')
    document.querySelector('.gamebody div').addEventListener('transitionend',function(){
        $('.gamebody div').css('transition','0.5s')
    })
});


//點擊前往輪盤遊戲畫面
// $('#toRoulette').click(function(){
//     document.location.href='Roulette.html'
// })