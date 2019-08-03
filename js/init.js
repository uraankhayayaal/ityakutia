$('.ml6 .letters').each(function(){
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});
  
anime.timeline({loop: false})
    .add({
      targets: '.ml6 .letter',
      translateY: ["1.1em", 0],
      translateZ: 0,
      duration: 750,
      delay: function(el, i) {
        return 3000 + 50 * i;
      }
    });

anime.timeline({loop: false})
    .add({
        targets: '.logo',
        rotate: '1turn',
        scale: 1,
        duration: 5000,
    });
anime.timeline({loop: false})
    .add({
        targets: '.logo img',
        loop: false,
        rotate: '1turn',
        duration: 5000,
        endDelay: 1000,
    });