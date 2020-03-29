$(document).ready(function(){
	
	// Initialization of Slick Slider

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

	
	// Catalog Tabs

	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab--active)', function() {
    $(this)
      .addClass('catalog__tab--active').siblings().removeClass('catalog__tab--active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content--active').eq($(this).index()).addClass('catalog__content--active');
  });


	// Flip card

	const button = document.getElementsByClassName('flip-block__link');

	for (let card of button) {
		function flipCard(e) {
			e.preventDefault();
			if (this.parentNode.classList.contains('flip-block__front')) {
				this.parentNode.classList.add('flip-block__front--active');
				this.parentNode.nextElementSibling.classList.add('flip-block__back--active');
			} else if(this.parentNode.classList.contains('flip-block__back')) {
				this.parentNode.classList.remove('flip-block__back--active');
				this.parentNode.previousElementSibling.classList.remove('flip-block__front--active');
			}
		}	
		card.addEventListener('click', flipCard);
	}
});