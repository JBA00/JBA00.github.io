$(document).ready(function() {
     $("section-2").on('click', function(e) {
          $("section-3").on('click', function(e) {
               $("section-4").on('click', function(e) {
                    $("section-5").on('click', function(e) {
    var scrollLink = $('.scroll');
    scrolllink.click(function(e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000 )
        
        
    }) 
    
    
