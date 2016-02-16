/**
 * Created by ct on 2015/12/10.
 */
$(document).ready(function(){
        $('#chat-close').click(function(){
            $('#chat-window').fadeOut()
        });
    $(window).scroll( function (){
        var  h_num=$(window).scrollTop();
        if (h_num>540){
            //$( '#chat-window' ).animate({top:'300px'},130);
            $( '#chat-window' ).css('top','300px' );
        } else {
            //$( '#chat-window' ).animate({top:'680px'},300);
            $( '#chat-window' ).css( 'top','680px' );
        }
    });
});
$(function() {
    $('.banner').unslider({
        speed: 500,               //  The speed to animate each slide (in milliseconds)
        delay: 3000,              //  The delay between slide animations (in milliseconds)
        complete: function() {},  //  A function that gets called after every slide animation
        keys: true,               //  Enable keyboard (left, right) arrow shortcuts
        dots: true,               //  Display dot navigation
        fluid: false,             //  Support responsive design. May break non-responsive designs
    });
});