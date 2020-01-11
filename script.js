$(document).ready(function(){

var playButton = $('.video-link');

playButton.mouseenter(function(){
    $(".video-link").css('box-shadow', "0 0 10px white")
});

playButton.mouseleave(function(){
    $(".video-link").css('box-shadow', "initial")
});

/*BOX INFO*/
var boxInfo = $('.info')
boxInfo.mouseenter(function(){
    $('.box-info-programs').css('transition', '.3s');
    $('.box-info-programs').css('width', '120%');
     $('.box-info-programs').css('height', '120%');
    
})

boxInfo.mouseleave(function(){
   
    $('.box-info-programs').css('width', '100%');
    $('.box-info-programs').css('height', '100%');
})

//AFFORD
var afford = $('.box-afford');
afford.mouseenter(function(){
    $('.box-info-afford').css('transition', '.3s');
    $('.box-info-afford').css('width', '120%');
    $('.box-info-afford').css('height', '120%');
    
})

afford.mouseleave(function(){
   
    $('.box-info-afford').css('width', '100%');
    $('.box-info-afford').css('height', '100%');
})

//Certification

var cert = $('.box-cert');
cert.mouseenter(function(){
    $('.box-info-certification').css('transition', '.3s');
    $('.box-info-certification').css('width', '120%');
    $('.box-info-certification').css('height', '120%');
    
})

cert.mouseleave(function(){
   
    $('.box-info-certification').css('width', '100%');
    $('.box-info-certification').css('height', '100%');
})







});