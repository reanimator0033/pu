
$(document).ready(function () {
//     $('.carusel__inner').slick({
//         speed: 1200,
//         // adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src= "../icons/left.png"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src= "../icons/right.png"></button></button>',
//         responsive: [
//             {
//                 breakpoint: 992,
//                 settings: {
//                     dots: true,
//                     arrows: false,
//                 }
//             }
//         ]
        
//     });
// });
var slider = tns({
    container: '.carusel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false,
    

    

  });
});

//   $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
//     $(this)
//       .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
//       .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
// });

//   // $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
//   //   $(this)
//   //     .addClass('catalog__tab_active').siblings().removeClass('.catalog__tab_active')
//   //     .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
//   // });

// })

$(document).ready(function(){
  $('.carousel__inner').slick({
      speed: 1200,
      adaptiveHeight: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
      responsive: [
          {
              breakpoint: 992,
              settings: {
                  dots: true,
                  arrows: false
              }
          }
      ]
  });
  
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

  function toggleSlide(item) {
      $(item).each(function(i) {
          $(this).on('click', function(e) {
              e.preventDefault();
              $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
              $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
          })
      });
  };

  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');
});