jQuery(document).ready(function( $ ){


// Navbar Scrollspy
$('body').scrollspy({ target: '#navbarSupportedContent', offset:210 });


// Slick slider;
$('.banner-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
});


// Team slide
$('.team-slider').slick({
  slidesToShow: 4,
  arrows:false,
  dots: false,
  autoplay: true,
  prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
  nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
  responsive: [
      {
        breakpoint: 991.98,
        settings: {
          arrows: false,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 2,
            arrows: true,
        }
      },
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 1,
          arrows: true,
          
        },
      }
  ]
});


// Sister Concerns

$('.sister-logo').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
  nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
  responsive: [
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 2
        }
      }
  ]
});


// Testimonial Slide

$('.testimonial-slide').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 991.98,
      settings: {
        slidesToShow: 1,
      }
    },
]
});


// Membership




// Counter up
$('.counter').counterUp({
  delay: 10,
  time: 1000
});


// Classes
$('#colorful').colorfulTab();


// Window Scroll
$(window).scroll(function(){
  let scrolling = $(window).scrollTop();
  
  if(scrolling > 600){
    $('.main-menu').css({
      'position' : 'fixed',
      'top' : '-30px',
    });
    $('.main-menu .navbar-brand').css({
      'height' : '55px',
      'position' : 'relative',
    });
  } else {
    $('.main-menu').css({
      'position' : 'absolute',
      'top' : '0px',
    });
    $('.main-menu .navbar-brand').css({
      'height' : '69px',
      'position' : 'absolute',
    });
  }
});


// Scroll to top Button Start
$(window).scroll(function(){
  let scrollToTop = $(this).scrollTop();

  if(scrollToTop > 600){
    $('.to-top').fadeIn(400);
  } else {
    $('.to-top').fadeOut(400);
  }
});




});
















