$(document).ready(function(){
	$('.carousel__inner').slick({
		infinite: true,
		speed: 2000,
		// adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnHover: false,
		slide: ".carousel__item",
		prevArrow:".arrow__left",
		nextArrow:".arrow__right",
		responsive: [
		{
			breakpoint: 930,
			settings: {
				arrows: false,
				dots: true
			}
		}],
	});

	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab--active)', function() {
    $(this)
      .addClass('catalog__tab--active').siblings().removeClass('catalog__tab--active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content--active').eq($(this).index()).addClass('catalog__content--active');
  });

	// $('.flip-block__link').each(function(i) {
	// 	$(this).on('click', function(e) {
	// 		e.preventDefault();
	// 		$('.flip-block__front').eq(i).toggleClass('flip-block__front--active');
	// 		$('.flip-block__back').eq(i).toggleClass('flip-block__back--active');
	// 	})
	// })

	$('.flip-block__link').each(function(i) {
		$(this).on('click', function(e) {
			e.preventDefault();
			$('.flip-block__front').eq(i).toggleClass('flip-block__front--active');
			$('.flip-block__back').eq(i).toggleClass('flip-block__back--active');
		})
	})


	$('.flip-block__link--back').each(function(i) {
		$(this).on('click', function(e) {
			e.preventDefault();
			$('.flip-block__front').eq(i).toggleClass('flip-block__front--active');
			$('.flip-block__back').eq(i).toggleClass('flip-block__back--active');
		})
	})
});