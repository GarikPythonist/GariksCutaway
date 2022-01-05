 var lastScrollTop = 0;
$(window).scroll(function(event){
   var $nav = $('#main_ul');
   var $elem = $('.list_elem')
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    $elem.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
   } else {
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    $elem.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    $nav.toggleClass('noscrolled', $(this).scrollTop() > $nav.height());
    $elem.toggleClass('noscrolled', $(this).scrollTop() > $nav.height());
   }
});

