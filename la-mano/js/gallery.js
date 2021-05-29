$(() => {
	const gallery = new Map();
	for (const [combo, tile] of tiles) {
		const {first, second, front, back, notfoodsafe, runny, doubleRunny, caution} = tile;

		const $tile = $('<div class="tile-container"></div');
		const $flipper = $('<div class="flipper"></div>').appendTo($tile);
		const $front = $('<div class="front"></div>').appendTo($flipper);
		const $back = $('<div class="back"></div>').appendTo($flipper);

		const $image = $('<a class="image" target="_blank" href="' + first + '-' + second + '"></a>');
		const $info = $('<div class="info"><p>' + glazes.get(first) + ' \\ ' + glazes.get(second) + '</p></div>');

		const $arrow = $('<div class="arrow" title="See other side"><img src="svg/flip.svg"></div>');

		if (notfoodsafe || runny || caution || doubleRunny) {
			const $icons = $('<div class="icons"></div>').appendTo($image);

			if (notfoodsafe) {
				$icons.append('<img title="Not food safe" src="svg/not-food-safe.svg">');
			}

			if (doubleRunny) {
				$icons.append('<img title="Runny" src="svg/runny.svg">');
				$icons.append('<img title="Runny" src="svg/runny.svg">');
			} else if (runny) {
				$icons.append('<img title="Runny" src="svg/runny.svg">');
			}

			if (caution) {
				$icons.append('<img title="May blister, jump, or crawl" src="svg/caution.svg">');
			}
		}

		$front.append($arrow.clone()).append($image.clone().prepend('<img class="tile" src="img/low-res/' + front + '">')).append($info.clone());
		$back.append($arrow.clone()).append($image.clone().prepend('<img class="tile" src="img/low-res/' + back + '">')).append($info.clone());

		gallery.set(combo, $tile);
	}

	const updateColumns = () => {
		$('.tile-container').css({'width': 'calc(' + $('main').width() / Math.floor($('main').width()/320) + 'px - 1rem)'});
	}

	const updateGallery = () => {
		$('main').empty();

		const firstVal = $('#first').val();
		const secondVal = $('#second').val();
		
		for (const first of glazes.keys()) {
			for (const second of glazes.keys()) {
				if ((firstVal == first || firstVal == 'anything') && (secondVal == second || secondVal == 'anything')) {
					$('main').append(gallery.get(first + second));
				}
	 		}
		}

		$('.arrow').click(function() { $(this).parents('.flipper').toggleClass('flip'); });

		$('img').on('contextmenu dragstart copy', () => {return false;});
		
		updateColumns();
	}

	$('select').empty().append('<option value="anything">Anything</option>').change(updateGallery);
	for (const [glaze, name] of glazes) {
		$('#first').append('<option value="' + glaze + '"' + (Cookies.get('first') == glaze ? ' selected="selected"' : '') + '>' + name + '</option>');
		$('#second').append('<option value="' + glaze + '"' + (Cookies.get('second') == glaze ? ' selected="selected"' : '') + '>' + name + '</option>');
	}
	$('#first').change(function() { Cookies.set('first', $(this).val()); });
	$('#second').change(function() { Cookies.set('second', $(this).val()); });

	updateGallery();

	$(window).resize(updateColumns);
});