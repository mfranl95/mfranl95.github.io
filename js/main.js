(function(d) {
    var config = {
      kitId: 'xaq3ozu',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);

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
