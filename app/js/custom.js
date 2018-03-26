
jQuery(document).ready(function($) {
    let currentpos=0;
    let length = parseInt($('.list li').css('height'))+parseInt($('.list li').css('margin-bottom'));
$('.next').click(function(event) {
    currentpos+=length;
    if (currentpos>=$('.list')[0].scrollHeight-4*72) {
        currentpos-=length;
        console.log('false')
    }else {
        $('.list').animate({
        scrollTop: currentpos
    }, 300);
    }
    
    // console.log($('.list')[0].scrollHeight);
    // console.log(currentpos);

});
$('.prev').click(function(event) {
    currentpos-=length;
   if (currentpos<0) {
        currentpos+=length;
        console.log('false')
    }else {
        $('.list').animate({
        scrollTop: currentpos
    }, 300);
    }
    // console.log($('.list')[0].scrollHeight);
    // console.log(currentpos);
});
});
