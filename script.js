$(document).ready(function(){
  /* This code is executed after the DOM has been completely loaded */

  $('nav a,footer a.up').click(function(e){

    // If a link has been clicked, scroll the page to the link's hash target:
    
    $.scrollTo( this.hash || 0, 1500);
    e.preventDefault();
  });

  // Read more or Read

  $('.readmore').click(function(e) {
    $(this).parent().toggleClass('short');
    e.preventDefault();

    if ($(this).text() == 'Read less') {
      $(this).text('Read more');
    } else {
      $(this).text('Read less');
    }

  });

});


// slide chay anh

$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  3000);


