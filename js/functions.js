$( '.swipebox' ).swipebox();

$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }
    },
  ]
});

$('.paragraph-list-desplegable .list li').each(function(i, ul){
  console.log(i);
  if(i > 3){
    $(this).addClass('hide');
  }
})

$('.show-more-list').click(function(e){
  e.preventDefault();
  $(this).hide();
  $('.paragraph-list-desplegable .list li').each(function(i, ul){
    $(this).removeClass('hide');
  })
})