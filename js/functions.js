$( '.swipebox' ).swipebox();

$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
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