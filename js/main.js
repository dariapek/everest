$(document).ready(function() {
  $('.exchange-rates__slider').slick({
    mobileFirst: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    draggable: true,
    responsive: [{
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 1219,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true
        }
      }
    ]
  });
});

$(document).ready(function() {
  $('.features__list--slider').slick({
    mobileFirst: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: true,
    dots: true,
    responsive: [{
      breakpoint: 767,
      settings: 'unslick'
    }]
  });
});
