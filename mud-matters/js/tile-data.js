const glazes = new Map([
	['behrensclear', 'Behren&rsquo;s Clear'],
	['charcoal', 'Charcoal'],
	['choy', 'Choy'],
	// ['grape', 'Grape'],
	['grey', 'Grey'],
	['harvestmoon', 'Harvest Moon'],
	['honeyamber', 'Honey Amber'],
	['leather', 'Leather'],
	['nutmeg', 'Nutmeg'],
	['randysred', 'Randy&rsquo;s Red'],
	['randyswhite', 'Randy&rsquo;s White'],
	['robertscobalt', 'Robert&rsquo;s Cobalt'],
	['spearmint', 'Spearmint'],
	['suede', 'Suede'],
	['trulywhite', 'Truly White'],
	['turquoise', 'Turquoise'],
	['volcanicash', 'Volcanic Ash']
]);

const tiles = new Map();
{
	const notfoodsafe = [
		'behrensclearchoy',
		'choycharcoal',
		'choyrobertscobalt',
		'leatherrobertscobalt',
		'nutmegrobertscobalt',
		'randyswhitechoy',
		'robertscobaltcharcoal',
		'robertscobaltchoy',
		'robertscobaltleather',
		'robertscobaltspearmint',
		'robertscobaltturquoise',
		'turquoisechoy'
	];

	const runny = [
		'charcoalturquoise',
		'charcoalvolcanicash',
		'choybehrensclear',
		'choychoy',
		'choygrey',
		'choyharvestmoon',
		'choyhoneyamber',
		'choyleather',
		'choynutmeg',
		'choyrandysred',
		'choyrandyswhite',
		'choyspearmint',
		'choysuede',
		'choytrulywhite',
		'choyturquoise',
		'choyvolcanicash',
		'behrenscleargrey',
		'behrenscleartrulywhite',
		'greycharcoal',
		'greybehrensclear',
		'greygrape',
		'greygrey',
		'greyhoneyamber',
		'greynutmeg',
		'greyrandysred',
		'greyrandyswhite',
		'greyrobertscobalt',
		'greyspearmint',
		'greytrulywhite',
		'greyturquoise',
		'greyvolcanicash',
		'harvestmoonbehrensclear',
		'harvestmoonchoy',
		'harvestmoongrey',
		'harvestmoonharvestmoon',
		'harvestmoonleather',
		'harvestmoonrobertscobalt',
		'harvestmoonspearmint',
		'harvestmoonsuede',
		'harvestmoonsuede',
		'harvestmoontrulywhite',
		'harvestmoonturquoise',
		'harvestmoonturquoise',
		'harvestmoonvolcanicash',
		'leatherharvestmoon',
		'leatherhoneyamber',
		'leathersuede',
		'leathertrulywhite',
		'leatherturquoise',
		'nutmeghoneyamber',
		'nutmegvolcanicash',
		'randysredharvestmoon',
		'randyswhitevolcanicash',
		'robertscobaltgrey',
		'robertscobaltnutmeg',
		'robertscobaltrandyswhite',
		'robertscobaltvolcanicash',
		'spearmintbehrensclear',
		'spearmintcharcoal',
		'spearmintchoy',
		'spearmintgrey',
		'spearmintharvestmoon',
		'spearmintleather',
		'spearmintrandysred',
		'spearmintrandyswhite',
		'spearminttrulywhite',
		'spearmintturquoise',
		'spearmintvolcanicash',
		'suedegrey',
		'suedehoneyamber',
		'suederobertscobalt',
		'suedevolcanicash',
		'trulywhiteharvestmoon',
		'trulywhitehoneyamber',
		'trulywhiteleather',
		'trulywhitespearmint',
		'trulywhitesuede',
		'trulywhiteturquoise',
		'trulywhitevolcanicash',
		'turquoiseharvestmoon',
		'turquoisehoneyamber',
		'turquoiserobertscobalt',
		'turquoisetrulywhite',
		'turquoisevolcanicash',
		'volcanicashgrey',
		'volcanicashharvestmoon',
		'volcanicashhoneyamber',
		'volcanicashleather',
		'volcanicashnutmeg',
		'volcanicashrandyswhite',
		'volcanicashrobertscobalt',
		'volcanicashspearmint',
		'volcanicashsuede',
		'volcanicashtrulywhite',
		'volcanicashturquoise'
	];

	const caution = [
		'behrensclearturquoise',
		'choyrobertscobalt',
		'behrensclearrobertscobalt',
		'behrenscleartrulywhite',
		'behrensclearvolcanicash',
		'grapechoy',
		'grapetrulywhite',
		'greyleather',
		'greytrulywhite',
		'harvestmoontrulywhite',
		'honeyamberchoy',
		'honeyamberrandyswhite',
		'honeyambertrulywhite',
		'leathergrape',
		'leatherrandyswhite',
		'leathertrulywhite',
		'leatherturquoise',
		'nutmegturquoise',
		'randysredtrulywhite',
		'randyswhitechoy',
		'randyswhitegrape',
		'randyswhiteleather',
		'randyswhitetrulywhite',
		'randyswhiteturquoise',
		'robertscobaltchoy',
		'robertscobalttrulywhite',
		'robertscobaltturquoise',
		'spearmintbehrensclear',
		'spearmintgrape',
		'spearmintgrey',
		'spearminthoneyamber',
		'spearminttrulywhite',
		'suedetrulywhite',
		'trulywhitechoy',
		'trulywhitebehrensclear',
		'trulywhitegrape',
		'trulywhitegrey',
		'trulywhitehoneyamber',
		'trulywhiteleather',
		'trulywhitenutmeg',
		'trulywhiterandysred',
		'trulywhiterandyswhite',
		'trulywhitespearmint',
		'trulywhitetrulywhite',
		'trulywhiteturquoise',
		'trulywhitevolcanicash',
		'turquoisecharcoal',
		'turquoisechoy',
		'turquoisegrape',
		'turquoisegrape',
		'turquoisegrey',
		'turquoisehoneyamber',
		'turquoisenutmeg',
		'turquoiserandyswhite',
		'turquoiserobertscobalt',
		'turquoisespearmint',
		'turquoisetrulywhite',
		'turquoiseturquoise',
		'volcanicashchoy',
		'volcanicashgrape',
		'volcanicashtrulywhite'
	];

	// const notes = new Map([
	// 	['behrensclearbehrensclear', 'This is an example note.'],
	// 	['behrensclearbluespruce', 'Here\'s another example.']
	// ]);

	for (const first of glazes.keys()) {
		for (const second of glazes.keys()) {
			const base = first + '-' + second;
			const glaze = first + second;
			tiles.set(glaze, {
				first: first,
				second: second,
				front: base + '-front.jpg', back: base + '-back.jpg',
				notfoodsafe: notfoodsafe.includes(glaze),
				runny: runny.includes(glaze),
				caution: caution.includes(glaze)
				//note: notes.has(glaze) ? notes.get(glaze) : ''
			});
		}
	}
}