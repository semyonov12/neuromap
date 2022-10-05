window.onload = function () {

	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});

	new WOW().init();

	$('.box__soon').click(function (e) {
		e.preventDefault();
	});

	$('.box__minus').click(function (e) {
		let num = $('.box__value').val();
		let price = $('.box__price-sp');
		let currentAmount = parseFloat(price.text(), 1);
		num--;
		if (num > 0) {
			$('.box__value').text(num);
			currentAmount = currentAmount - 0.01;
			$('.box__value').val(num);
			$('.box__price-sp').text(currentAmount.toFixed(2));
		};
	});

	$('.box__plus').click(function (e) {
		let num = $('.box__value').val();
		let price = $('.box__price-sp');
		let currentAmount = parseFloat(price.text());
		currentAmount = currentAmount + 0.01;
		num++;
		if (num <= 10000) {
			$('.box__value').val(num);
			$('.box__price-sp').text(currentAmount.toFixed(2));
		};
	});

	$('.main__button').click(function (e) {
		e.preventDefault();

		let target = $(this).data('box');

		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 300);
	});

	$('.main__soon').click(function (e) {
		e.preventDefault();

		let target = $(this).data('box');

		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 300);
	});

};






