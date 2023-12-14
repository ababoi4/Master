
$(document).ready(function(){
  $('.slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: '60px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: false,
          arrows: true,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          dots: false,
          arrows: true,
          slidesToScroll: 1
        }
      }
    ]
  });
});

$(document).ready(() => {
  $('.header__burger').click(function() {
    $('.header__burger, .mobile-menu').toggleClass('active');
  });
  $(".mobile-menu__link").click(function(){
    $(".header__burger").click();
  });

});

