// event for link when klik
$('.page-scroll').on('click', function(e) {

    // take href
    var direction = $(this).attr('href');
    // catch elemen ybs
    var elemenDirection = $(direction);
    
    // move it scroll
    $('html, body').animate({
        scrollTop: elemenDirection.offset().top -80
    }, 1250, 'easeInOutExpo');

    e.preventDefault();

});