(function() {
        var container = $('div.slider').css('overflow', 'hidden').children('ul');
        var slider = new Slider(container, $('#slider-nav'));
        
        slider.nav.find('button').on('click', function() {
            slider.setCurrent($(this).data('dir'));
            slider.transition();
        });
    })();

function Slider(container, nav) {
    this.container = container;
    this.nav = nav.show();
    this.imgs = this.container.find('img');
    this.imgWidth = this.imgs[0].width;
    this.imgsLen = this.imgs.length;
    this.current = 0;
}

Slider.prototype.transition = function(coords) {
    this.container.animate({
        'margin-left': coords || -(this.current * this.imgWidth)
    });
};

Slider.prototype.setCurrent = function(dir) {
    var pos = this.current;

    //Shortened if statement
    //(this.current === 'next') ? pos++ : pos--;

    //More shortened
    pos += (~~(dir === 'next') || -1);
    this.current = (pos < 0) ? this.imgsLen -1 : pos % this.imgsLen;
    return pos;
}

// Fonts
(function(d) {
    var config = {
      kitId: 'qck7coe',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);

(function(d) {
    var config = {
      kitId: 'gpw4ymh',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);
