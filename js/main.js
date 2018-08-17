

$(function(){
  // find all slides
  var slides = $('.img-slider');
  // starting index
  var i = 0;
  // click listener
  $('.next').click(function(){
    // find next index
    // i + 1 or 0 if end of slides
    i = ++i % slides.length;
    // scroll to that index
    $('.image').animate(
      {'left' : -(slides.eq(i).position().left)},
      600
    );
  });
});
