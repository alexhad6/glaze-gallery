$(() => {
	const [first, second] = location.pathname.split('/').pop().split('-');
	const firstName = glazes.get(first), secondName = glazes.get(second);
	const {front, back, notfoodsafe, runny, caution} = tiles.get(first + second);

	const $tile = $('<div class="tile-container"></div');
	const $front = $('<div class="front"></div>').appendTo($tile);
	const $back = $('<div class="back"></div>').appendTo($tile);
	
	const $arrow = $('<div class="arrow" title="See other side"><img src="svg/flip.svg"></div>');

	$front.append($arrow.clone()).append('<img id="front-img" class="tile" src="img/high-res/' + front + '">');
	$back.append($arrow.clone()).append('<img id="back-img" class="tile" src="img/high-res/' + back + '">');

	const $glass = $('<div class="magnifying-glass"></div>').hide();


	const makeGlass = ($image, $glass) => {
		const zoom = 2;
		const borderWidth = 3;

		$glass.css('background-image', 'url(\'' + $image.attr('src') + '\')');

		let glass, image, p;
		const updateImage = () => {
			image = {w: $image.width(), h: $image.height()};
			p = $image.offset();

			$glass.css({
				'width': image.w * 0.2 + 'px',
				'height': image.w * 0.2 + 'px',
				'background-size': (image.w * zoom) + 'px ' + (image.h * zoom) + 'px'
			});

			glass = {w: $glass.width() / 2, h: $glass.height() / 2};
		}
		
		updateImage();
		$(window).resize(updateImage);

		const moveGlass = (e) => {
			let x = e.pageX - p.left;
			let y = e.pageY - p.top;

			$glass.show();
			if (x < 0 || x > image.w || y < 0 || y > image.h) { $glass.hide(); }
			if (x > image.w - $('.arrow').width() && y < $('.arrow').width()) { $glass.hide(); }

			if (x > image.w - glass.w/zoom) { x = image.w - glass.w/zoom; }
			if (x < glass.w/zoom) { x = glass.w/zoom; }
			if (y > image.h - glass.h/zoom) { y = image.h - glass.h/zoom; }
			if (y < glass.h/zoom) { y = glass.h/zoom; }

			$glass.css({
				'left': (x - glass.w) + 'px',
				'top': (y - glass.h) + 'px',
				'background-position': '-' + ((x * zoom) - glass.w) + 'px -' + ((y * zoom) - glass.h) + 'px'
			});
		}

		if (!('ontouchstart' in window)) {
			$image.on('mousemove', moveGlass);
			$glass.on('mousemove', moveGlass);
			$glass.on('mouseleave', () => { $glass.hide(); });
			$(window).on('resize', () => { $glass.hide(); });
		}
		
	}


	$info = $('<div class="info"></div>');

	$('<div class="dips"></div>').append('<p><span>1st dip (under):</span> <span>' + firstName + '</span></p>', '<p><span>2nd dip (over):</span> <span>' + secondName + '</span></p>').appendTo($info);

	if (notfoodsafe || runny || caution || doublerunny || note) {
		$warnings = $('<div class="warnings"></div>').appendTo($info);

		if (notfoodsafe) {
			$warnings.append('<p><img src="svg/not-food-safe.svg"> Not food safe</p>');
		}

		if (doublerunny) {
			$warnings.append('<p><img src="svg/runny.svg"> <img src="svg/runny.svg"> Very runny</p>');
		} else if (runny) {
			$warnings.append('<p><img src="svg/runny.svg"> Runny</p>');
		}

		if (caution) {
			$warnings.append('<p><img src="svg/caution.svg"> May blister, jump, or crawl</p>');
		}

		if (note) {
			$warnings.append(`<p>${note}</p>`);
		}
	}

	$('main').empty().append($tile, $info);

	let made = false;
	$('.arrow').click(function() {
		$(this).parents('.tile-container').toggleClass('flip');

		if (!made) {
			makeGlass($('#back-img'), $glass.clone().appendTo($back));
			made = true;
		}
	});

	$('#front-img').on('load', function() { makeGlass($(this), $glass.clone().appendTo($front)); });
	//$('#back-img').on('load', function() { makeGlass($(this), $glass.clone().appendTo($back)); });
});