$('.ml6 .letters').each(function(){
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});
  
anime.timeline({loop: true})
    .add({
      targets: '.ml6 .letter',
      translateY: ["1.1em", 0],
      translateZ: 0,
      duration: 750,
      delay: function(el, i) {
        return 3000 + 50 * i;
      }
    }).add({
      targets: '.ml6',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });

anime.timeline({loop: true})
    .add({
        targets: '.logo',
        rotate: '1turn',
        scale: 1,
        duration: 5000,
    })
    .add({
        targets: '.logo',
        scale: 0,
        duration: 1000,
    });
anime.timeline({loop: true})
    .add({
        targets: '.logo img',
        loop: true,
        rotate: '1turn',
        duration: 5000,
        endDelay: 1000,
    });